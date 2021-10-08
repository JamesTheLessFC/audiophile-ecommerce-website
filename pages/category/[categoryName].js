import CategoryHeader from "../../components/CategoryHeader";
import Footer from "../../components/Footer";
import HeadComponent from "../../components/HeadComponent";
import Main from "../../components/Main";
import NavBar from "../../components/NavBar";
import ProductList from "../../components/ProductList";
import Menu from "../../components/Menu";
import BestGear from "../../components/BestGear";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getClient } from "../../lib/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == 'product' && category == $categoryName]`;

export default function Category({ data }) {
  const router = useRouter();
  const { categoryName } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!router.isFallback && data.length === 0) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <HeadComponent
        title={`Shop ${
          categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
        }`}
      />
      <NavBar />
      <CategoryHeader name={categoryName} />
      <Main>
        <ProductList data={data} />
        <Menu />
        <BestGear />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getClient("readOnly").fetch(query, {
    categoryName: params.categoryName,
  });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient("readOnly").fetch(
    groq`*[_type == "product" && defined(category)][].category`
  );

  const uniquePaths = [...new Set(paths)];

  return {
    paths: uniquePaths.map((categoryName) => ({ params: { categoryName } })),
    fallback: true,
  };
}

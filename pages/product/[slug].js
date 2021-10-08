import { useRouter } from "next/router";
import BestGear from "../../components/BestGear";
import Footer from "../../components/Footer";
import HeadComponent from "../../components/HeadComponent";
import Main from "../../components/Main";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import ProductDetails from "../../components/ProductDetails";
import styles from "../../styles/ProductPage.module.scss";
import BackButton from "../../components/BackButton";
import ErrorPage from "next/error";
import { getClient } from "../../lib/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == 'product' && slug.current == $slug][0]`;

export default function ProductPage({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <HeadComponent title={data.name} />
      <NavBar />
      <Main>
        <BackButton />
        <ProductDetails data={data} />
        <div className={styles.menu_section}>
          <Menu />
        </div>
        <BestGear />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getClient("readOnly").fetch(query, {
    slug: params.slug,
  });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getClient("readOnly").fetch(
    groq`*[_type == "product" && defined(slug)][].slug`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug: slug.current } })),
    fallback: true,
  };
}

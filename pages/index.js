import HeadComponent from "../components/HeadComponent";
import Header from "../components/Header";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import FeaturedProducts from "../components/FeaturedProducts";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <HeadComponent title="Audiophile" />
      <NavBar />
      <Header />
      <Main>
        <Menu />
        <FeaturedProducts />
        <BestGear />
      </Main>
      <Footer />
    </>
  );
}

import HeadComponent from "../components/HeadComponent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import CheckoutForm from "../components/CheckoutForm";
import BackButton from "../components/BackButton";
import ModalBackground from "../components/ModalBackground";
import OrderSubmissionErrorModal from "../components/OrderSubmissionErrorModal";
import { useContext } from "react";
import ShopContext from "../contexts/shop";

export default function CheckoutPage() {
  const { orderSubmissionError } = useContext(ShopContext);

  return (
    <>
      <HeadComponent title="Checkout" />
      <NavBar />
      <Main checkoutPage={true}>
        <BackButton />
        <CheckoutForm />
      </Main>
      <Footer checkoutPage={true} />
      {orderSubmissionError && (
        <ModalBackground>
          <OrderSubmissionErrorModal />
        </ModalBackground>
      )}
    </>
  );
}

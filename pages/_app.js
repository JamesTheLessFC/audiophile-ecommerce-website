import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { ShopProvider } from "../contexts/shop";

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Component {...pageProps} />
    </ShopProvider>
  );
}

export default MyApp;

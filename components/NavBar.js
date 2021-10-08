import styles from "../styles/NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";
import ShopContext from "../contexts/shop";
import ModalBackground from "./ModalBackground";
import MobileMenu from "./MobileMenu";

const logo =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306183/audiophile/shared/desktop/logo_uosmpe.svg";

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [showMobileMenuBackground, setShowMobileMenuBackground] =
    useState(false);
  const [showShoppingCartBackground, setShowShoppingCartBackground] =
    useState(false);
  const { cart } = useContext(ShopContext);

  useEffect(() => {
    if (!showMobileMenu) {
      setTimeout(() => {
        setShowMobileMenuBackground(false);
      }, 500);
    } else {
      setShowMobileMenuBackground(true);
    }
  }, [showMobileMenu]);

  useEffect(() => {
    if (!showShoppingCart) {
      setTimeout(() => {
        setShowShoppingCartBackground(false);
      }, 500);
    } else {
      setShowShoppingCartBackground(true);
    }
  }, [showShoppingCart]);

  useEffect(() => {
    const handleOutsideClick = () => {
      if (showShoppingCart) {
        setShowShoppingCart(false);
      } else if (showMobileMenu) {
        setShowMobileMenu(false);
      }
    };
    setTimeout(() => {
      if (showShoppingCart || showMobileMenu) {
        window.addEventListener("click", handleOutsideClick);
      }
    }, 0);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showShoppingCart, showMobileMenu]);

  const handleBarsClick = (e) => {
    e.stopPropagation();
    setShowMobileMenu((prevState) => !prevState);
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
    setShowShoppingCart((prevState) => !prevState);
  };

  return (
    <nav className={styles.root}>
      <button
        onClick={handleBarsClick}
        className={showMobileMenu ? styles.active : ""}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="Audiophile logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <ul className={styles.desktop_menu}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/category/headphones">
            <a>Headphones</a>
          </Link>
        </li>
        <li>
          <Link href="/category/speakers">
            <a>Speakers</a>
          </Link>
        </li>
        <li>
          <Link href="/category/earphones">
            <a>Earphones</a>
          </Link>
        </li>
      </ul>
      <button
        onClick={handleCartClick}
        className={showShoppingCart ? styles.active : ""}
      >
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      </button>
      {cart.length > 0 && (
        <span className={styles.item_count}>{cart.length}</span>
      )}
      {showMobileMenuBackground && (
        <ModalBackground>
          <MobileMenu showMobileMenu={showMobileMenu} />
        </ModalBackground>
      )}
      {showShoppingCartBackground && (
        <ModalBackground>
          <ShoppingCart showShoppingCart={showShoppingCart} />
        </ModalBackground>
      )}
    </nav>
  );
}

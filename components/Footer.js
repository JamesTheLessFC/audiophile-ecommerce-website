import styles from "../styles/Footer.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const logo =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306183/audiophile/shared/desktop/logo_uosmpe.svg";

export default function Footer({ checkoutPage }) {
  return (
    <footer
      className={`${styles.root} ${
        checkoutPage ? styles.root_checkout_page : ""
      }`}
    >
      <div className={styles.rectangle}></div>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="Audiophile logo"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        />
      </div>
      <ul>
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
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p>Copyright 2021. All Rights Reserved</p>
      <div className={styles.iconsContainer}>
        <a>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
}

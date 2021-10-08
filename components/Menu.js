import styles from "../styles/Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const headphones =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306183/audiophile/shared/desktop/image-category-thumbnail-headphones_luf8as.png";
const speakers =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306182/audiophile/shared/desktop/image-category-thumbnail-speakers_bo3hg4.png";
const earphones =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306182/audiophile/shared/desktop/image-category-thumbnail-earphones_fvsglg.png";

export default function Menu() {
  return (
    <ul className={styles.root}>
      <li>
        <div className={`${styles.image} ${styles.image_headphones}`}>
          <Image
            src={headphones}
            alt="Headphones"
            layout="responsive"
            width={438}
            height={422}
          />
        </div>
        <h4>Headphones</h4>
        <Link href="/category/headphones">
          <a>
            <span>Shop </span>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </Link>
      </li>
      <li>
        <div className={`${styles.image} ${styles.image_speakers}`}>
          <Image
            src={speakers}
            alt="Speakers"
            layout="responsive"
            width={438}
            height={408}
          />
        </div>
        <h4>Speakers</h4>
        <Link href="/category/speakers">
          <a>
            <span>Shop </span>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </Link>
      </li>
      <li>
        <div className={`${styles.image} ${styles.image_earphones}`}>
          <Image
            src={earphones}
            alt="Earphones"
            layout="responsive"
            width={438}
            height={380}
          />
        </div>
        <h4>Earphones</h4>
        <Link href="/category/earphones">
          <a>
            <span>Shop </span>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </a>
        </Link>
      </li>
    </ul>
  );
}

import styles from "../styles/Header.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const image_mobile =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306181/audiophile/home/mobile/image-header_yjlc6g.jpg";
const image_tablet =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306180/audiophile/home/tablet/image-header_rnh6wp.jpg";
const image_desktop =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306180/audiophile/home/desktop/image-hero_x1byly.jpg";

export default function Header() {
  const router = useRouter();
  const imageSizes = ["mobile", "tablet", "desktop"];

  return (
    <header className={styles.root}>
      {imageSizes.map((size) => (
        <div
          key={size}
          className={`${styles.image} ${styles[`image_${size}`]}`}
        >
          <Image
            src={
              size === "mobile"
                ? image_mobile
                : size === "tablet"
                ? image_tablet
                : image_desktop
            }
            alt="XX99 Mark II headphones"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <div className={styles.content}>
        <h4>New product</h4>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button
          onClick={() => router.push("/product/xx99-mark-two-headphones")}
        >
          See product
        </button>
      </div>
    </header>
  );
}

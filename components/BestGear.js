import styles from "../styles/BestGear.module.scss";
import Image from "next/image";
const image_mobile =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306183/audiophile/shared/mobile/image-best-gear_bqee4z.jpg";
const image_tablet =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306181/audiophile/shared/tablet/image-best-gear_kd0mya.jpg";
const image_desktop =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306182/audiophile/shared/desktop/image-best-gear_qazndr.jpg";

export default function BestGear() {
  const imageSizes = ["mobile", "tablet", "desktop"];
  return (
    <section className={styles.root}>
      {imageSizes.map((size) => (
        <div
          key={size}
          className={`${styles.image_container} ${
            styles[`image_container_${size}`]
          }`}
        >
          <div className={styles.image}>
            <Image
              src={
                size === "mobile"
                  ? image_mobile
                  : size === "tablet"
                  ? image_tablet
                  : image_desktop
              }
              alt="person wearing headphones"
              layout="responsive"
              width={size === "mobile" ? 654 : size === "tablet" ? 1378 : 540}
              height={size === "mobile" ? 600 : size === "tablet" ? 600 : 588}
            />
          </div>
        </div>
      ))}
      <div className={styles.text}>
        <h1>
          Bringing you the
          <br />
          <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

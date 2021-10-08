import styles from "../styles/FeaturedProducts.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const circles =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306180/audiophile/home/desktop/pattern-circles_yccbxu.svg";
const speaker_zx9 =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306181/audiophile/home/desktop/image-speaker-zx9_ghtbcr.png";
const speaker_zx7_mobile =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306181/audiophile/home/mobile/image-speaker-zx7_bpzl2x.jpg";
const speaker_zx7_tablet =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306180/audiophile/home/tablet/image-speaker-zx7_hatzaf.jpg";
const speaker_zx7_desktop =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306180/audiophile/home/desktop/image-speaker-zx7_uxi8yf.jpg";
const earphones_yx1_mobile =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306181/audiophile/home/mobile/image-earphones-yx1_j5rsoa.jpg";
const earphones_yx1_tablet =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306180/audiophile/home/tablet/image-earphones-yx1_mnp0xs.jpg";
const earphones_yx1_desktop =
  "https://res.cloudinary.com/dhaxmdus8/image/upload/v1633306180/audiophile/home/desktop/image-earphones-yx1_gpvy1g.jpg";

export default function FeaturedProducts() {
  const router = useRouter();
  const imageSizes = ["mobile", "tablet", "desktop"];

  return (
    <section className={styles.root}>
      <div className={`${styles.product} ${styles.product_zx9_speaker}`}>
        <div className={styles.pattern_circles}>
          <Image
            src={circles}
            alt="circle pattern"
            layout="responsive"
            width={944}
            height={944}
          />
        </div>
        <div className={styles.image_speaker_zx9}>
          <Image
            src={speaker_zx9}
            alt="ZX9 speaker"
            layout="responsive"
            width={756}
            height={918}
          />
        </div>
        <h2>
          ZX9
          <br />
          Speaker
        </h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button onClick={() => router.push("/product/zx9-speaker")}>
          See product
        </button>
      </div>
      <div className={`${styles.product} ${styles.product_zx7_speaker}`}>
        {imageSizes.map((size) => (
          <div
            key={size}
            className={`${styles.image_speaker_zx7_container} ${
              styles[`image_speaker_zx7_container_${size}`]
            }`}
          >
            <div className={styles.image_speaker_zx7}>
              <Image
                src={
                  size === "mobile"
                    ? speaker_zx7_mobile
                    : size === "tablet"
                    ? speaker_zx7_tablet
                    : speaker_zx7_desktop
                }
                alt="ZX7 speaker"
                layout="responsive"
                width={size === "mobile" ? 654 : size === "tablet" ? 689 : 1110}
                height={size === "mobile" ? 640 : size === "tablet" ? 320 : 320}
              />
            </div>
          </div>
        ))}
        <div className={styles.positioned_text}>
          <h2>ZX7 Speaker</h2>
          <button onClick={() => router.push("/product/zx7-speaker")}>
            See product
          </button>
        </div>
      </div>
      <div className={styles.product_group}>
        <div className={`${styles.product} ${styles.product_yx1_earphones}`}>
          {imageSizes.map((size) => (
            <div
              key={size}
              className={`${styles.image_earphones_yx1_container} ${
                styles[`image_earphones_yx1_container_${size}`]
              }`}
            >
              <div className={styles.image_earphones_yx1}>
                <Image
                  src={
                    size === "mobile"
                      ? earphones_yx1_mobile
                      : size === "tablet"
                      ? earphones_yx1_tablet
                      : earphones_yx1_desktop
                  }
                  alt="YX1 earphones"
                  layout="responsive"
                  width={
                    size === "mobile" ? 654 : size === "tablet" ? 678 : 540
                  }
                  height={
                    size === "mobile" ? 400 : size === "tablet" ? 640 : 320
                  }
                />
              </div>
            </div>
          ))}
        </div>
        <div className={`${styles.product} ${styles.product_yx1_earphones}`}>
          <div>
            <h2>YX1 Earphones</h2>
            <button onClick={() => router.push("/product/yx1-earphones")}>
              See product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

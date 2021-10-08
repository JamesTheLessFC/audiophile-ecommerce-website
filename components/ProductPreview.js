import styles from "../styles/ProductPreview.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductPreview({ data }) {
  const imageSizes = ["mobile", "tablet", "desktop"];
  const router = useRouter();

  return (
    <li className={styles.root}>
      {imageSizes.map((size) => (
        <div
          key={size}
          className={`${styles.image_container} ${
            styles[`image_container_${size}`]
          }`}
        >
          <div className={styles.image}>
            <Image
              src={data.categoryImage[size]}
              alt={data.name}
              layout="responsive"
              width={size === "mobile" ? 654 : size === "tablet" ? 1378 : 1080}
              height={size === "mobile" ? 704 : size === "tablet" ? 704 : 1120}
            />
          </div>
        </div>
      ))}
      <div className={styles.text}>
        {data.new ? (
          <h4>
            new
            <br />
            product
          </h4>
        ) : (
          ""
        )}
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <button onClick={() => router.push(`/product/${data.slug.current}`)}>
          See Product
        </button>
      </div>
    </li>
  );
}

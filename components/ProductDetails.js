import styles from "../styles/ProductDetails.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import ShopContext from "../contexts/shop";

export default function ProductDetails({ data }) {
  const imageSizes = ["mobile", "tablet", "desktop"];
  const { addToCart } = useContext(ShopContext);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [data]);

  const incrementQuantity = () => {
    setQuantity((prevState) => {
      return ++prevState;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevState) => {
      if (prevState > 1) {
        return --prevState;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.first_section}>
        {imageSizes.map((size) => (
          <div
            key={size}
            className={`${styles.image_container} ${
              styles[`image_container_${size}`]
            }`}
          >
            <div className={styles.image}>
              <Image
                src={data.image[size]}
                alt={data.name}
                layout="responsive"
                width={size === "mobile" ? 654 : size === "tablet" ? 562 : 1080}
                height={
                  size === "mobile" ? 654 : size === "tablet" ? 960 : 1120
                }
              />
            </div>
          </div>
        ))}
        <div className={styles.first_section_text}>
          {data.new ? <h4>new product</h4> : ""}
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <p className={styles.price}>${data.price.toLocaleString()}</p>
          <div className={styles.cart_buttons_container}>
            <div className={styles.cart_quantity}>
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
            <button onClick={() => addToCart({ productData: data, quantity })}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className={styles.second_section}>
        <div className={styles.features}>
          <h2>Features</h2>
          <p>{data.features}</p>
        </div>
        <div className={styles.includes}>
          <h2>In the box</h2>
          <ul>
            {data.includes.map((item) => (
              <li key={item.item}>
                <p>
                  <span>{item.quantity}x</span>
                  <span>{item.item}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {imageSizes.map((size) => (
        <div key={size} className={styles.gallery}>
          <div className={styles.gallery_sm}>
            <div
              className={`${styles.gallery_image_container_sm} ${
                styles[`gallery_image_container_sm_${size}`]
              }`}
            >
              <div className={styles.image}>
                <Image
                  src={data.gallery.first[size]}
                  alt="gallery image"
                  layout="responsive"
                  width={
                    size === "mobile" ? 654 : size === "tablet" ? 554 : 445
                  }
                  height={
                    size === "mobile" ? 348 : size === "tablet" ? 348 : 280
                  }
                />
              </div>
            </div>
            <div
              className={`${styles.gallery_image_container_sm} ${
                styles[`gallery_image_container_sm_${size}`]
              }`}
            >
              <div className={styles.image}>
                <Image
                  src={data.gallery.second[size]}
                  alt="gallery image"
                  layout="responsive"
                  width={
                    size === "mobile" ? 654 : size === "tablet" ? 554 : 445
                  }
                  height={
                    size === "mobile" ? 348 : size === "tablet" ? 348 : 280
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.gallery_lg}>
            <div
              className={`${styles.gallery_image_container_lg} ${
                styles[`gallery_image_container_lg_${size}`]
              }`}
            >
              <div className={styles.image}>
                <Image
                  src={data.gallery.third[size]}
                  alt="gallery image"
                  layout="responsive"
                  width={
                    size === "mobile" ? 654 : size === "tablet" ? 790 : 635
                  }
                  height={
                    size === "mobile" ? 736 : size === "tablet" ? 736 : 592
                  }
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.others_section}>
        <h2>You may also like</h2>
        <ul className={styles.others}>
          {data.others.map((product) => (
            <li key={product.name}>
              {imageSizes.map((size) => (
                <div
                  key={size}
                  className={`${styles.others_image_container} ${
                    styles[`others_image_container_${size}`]
                  }`}
                >
                  <div className={styles.image}>
                    <Image
                      src={product.image[size]}
                      alt={product.name}
                      layout="responsive"
                      width={
                        size === "mobile" ? 654 : size === "tablet" ? 446 : 700
                      }
                      height={
                        size === "mobile" ? 240 : size === "tablet" ? 636 : 636
                      }
                    />
                  </div>
                </div>
              ))}
              <h2>{product.name}</h2>
              <button
                onClick={() => router.push(`/product/${product.slug.current}`)}
              >
                See product
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

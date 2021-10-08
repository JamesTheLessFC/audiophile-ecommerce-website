import styles from "../styles/ProductList.module.scss";
import ProductPreview from "./ProductPreview";

export default function ProductList({ data }) {
  return (
    <ul className={styles.root}>
      {data.map((product) => (
        <ProductPreview key={product._id} data={product} />
      ))}
    </ul>
  );
}

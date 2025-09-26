import styles from "./ProductCard.module.css";

function ProductCard({ img, title, price }) {
  return (
    <div className={styles.productCard}>
      <img src={img} alt={title} />
      <div className={styles.productTittle}>{title}</div>
      <div className={styles.productPrice}>{price}</div>
    </div>
  );
}

export default ProductCard;

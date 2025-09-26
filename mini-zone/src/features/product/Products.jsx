import ProductCard from "./ProductCard";

import styles from "./Products.module.css";

function Products({ categories, products }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <div>
            <h1>{category}</h1>
            <section className={styles.products}>
              {products
                .filter((el) => el.category === category)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    img={product.image}
                    price={`₹${product.price}`}
                    title={product.title}
                  />
                ))}
            </section>
          </div>
        );
      })}
    </>
  );
}

export default Products;

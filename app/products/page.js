import ProductCard from "../../components/Products/ProductCard";
import styles from "../page.module.css";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      <h1>Products</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

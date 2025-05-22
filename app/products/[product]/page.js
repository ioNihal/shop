import Link from "next/link";
import Image from "next/image";
import styles from "./ProductDetail.module.css";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.product);

  return (
    <div className={styles.container}>
      <Link href="/products" className={styles.backLink}>
        Back
      </Link>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.rating}>
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
      </div>
    </Link>
  );
}

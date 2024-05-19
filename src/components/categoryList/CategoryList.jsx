import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`, {
    cache: "default",
  });

  if (!res.ok) throw new Error("Failed to get categories");

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item, i) => (
          <Link
            href={`/blog?cat=${item.title}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={i}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

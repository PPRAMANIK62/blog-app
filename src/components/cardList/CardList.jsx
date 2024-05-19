import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/post`, {
    cache: "default",
  });

  if (!res.ok) throw new Error("Failed to get categories");

  return res.json();
};

const CardList = async () => {
  // const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;

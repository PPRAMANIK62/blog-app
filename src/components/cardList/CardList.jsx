import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { POSTS_PER_PAGE } from "@/lib/constants";

const getData = async (page) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}`,
    {
      cache: "default",
    }
  );

  if (!res.ok) throw new Error("Failed to get posts");

  return res.json();
};

const CardList = async ({ page }) => {
  const { posts, count } = await getData(page);

  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNext = POSTS_PER_PAGE * page < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;

import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              ducimus labore eligendi atque, voluptate cumque modi laborum et
              temporibus quam laudantium earum deserunt soluta neque a
              praesentium possimus perferendis rem.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe id
              corporis neque officiis quaerat, delectus nisi possimus, veritatis
              adipisci, numquam modi reiciendis voluptatum consectetur? Repellat
              inventore quam unde eveniet voluptates.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              eius placeat debitis expedita fugiat voluptate ducimus officia
              soluta iure! Voluptatem eius repellendus nemo rerum officiis
              temporibus omnis, quaerat assumenda inventore?
            </p>
          </div>
          <div className={styles.coment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

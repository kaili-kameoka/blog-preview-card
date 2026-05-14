import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <article className={styles.card} aria-labelledby="article-title">
        <Image
          className={styles.illustration}
          src="/illustration-article.svg"
          alt=""
          width={336}
          height={200}
          priority
        />

        <div className={styles.content}>
          <p className={styles.category}>Learning</p>
          <p className={styles.published}>Published 21 Dec 2023</p>
          <h1 className={styles.title} id="article-title">
            HTML &amp; CSS foundations
          </h1>
          <p className={styles.description}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>

        <div className={styles.author}>
          <Image
            className={styles.avatar}
            src="/image-avatar.webp"
            alt=""
            width={32}
            height={32}
          />
          <p>Greg Hooper</p>
        </div>
      </article>
    </main>
  );
}

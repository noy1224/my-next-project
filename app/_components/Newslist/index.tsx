import Image from "next/image"

import styles from "./index.module.css"

type News = {
 id: string;
 title: string
 category:{
  name:string;
 };
 publishedAt: string;
 createdAt:string;
};

type Props = {
    news: News[];
  };

  export default function NewsList({ news }: Props) {
    if (news.length === 0) {
      return <p>記事がありません。</p>;
    }
    return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <li key={article.id} className={styles.list}>

              <Image
                src="/no/image.png"
                alt="No image"
                className={styles.image}
                width={1200}
                height={630}
              />
              
            </div>  
            </li>
          ))}
        </ul>
import { Link } from "react-router-dom";

import { Game } from "@/src/typing";

import styles from "./GameCard.module.scss";
import { changeFormat } from "@/src/utils";

export const GameCard = function ({
  id,
  title,
  thumbnail,
  genre,
  publisher,
  release_date,
}: Game) {
  return (
    <li className={styles.item}>
      <Link to={`game/${id}`} className={styles.card}>
        <img src={thumbnail} alt="game logo" className={styles.img} />
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p>{publisher}</p>
          <div className={styles.wrapper}>
            <span className={styles.genre}>{genre}</span>
            <time dateTime={release_date} className={styles.date}>
              {changeFormat(release_date)}
            </time>
          </div>
        </div>
      </Link>
    </li>
  );
};

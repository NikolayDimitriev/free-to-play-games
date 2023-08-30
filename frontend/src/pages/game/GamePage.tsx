import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "@/src/store";
import { fetchGameById, setGame } from "@/src/store/gameById";

import { Loader } from "@/src/components/loader/Loader";

import { changeFormat, getCookie } from "@/src/utils";
import { GameById } from "@/src/typing";

import styles from "./GamePage.module.scss";

export const GamePage = function () {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { game, isLoading, error } = useAppSelector((state) => state.game);
  const controller = new AbortController();

  useEffect(() => {
    if (!id) return;

    const gameCookie: GameById = getCookie(id);

    if (gameCookie) {
      dispatch(setGame(gameCookie));
      return;
    }

    dispatch(fetchGameById({ id }));

    return () => {
      controller.abort(); // Отменяем запрос при размонтировании компонента
    };
  }, [id]);

  if (isLoading) {
    return (
      <section className={cn(styles.section, styles.center)}>
        <Loader />
      </section>
    );
  }

  if (error) {
    return (
      <section className={cn(styles.section, styles.center)}>
        <Link to={"/"} className={styles.link}>
          Go to Free Games
        </Link>
        <div style={{ color: "red" }}>Something went wrong, sorry</div>
      </section>
    );
  }

  return (
    game && (
      <section className={styles.section}>
        <div className={cn(styles.container, "container")}>
          <div className={styles.left}>
            <div className={styles.imgWrapper}>
              <img src={game.thumbnail} alt={game.title} />
            </div>
            <div className={styles.info}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <span>Publisher: </span>
                  {game.publisher}
                </li>
                <li className={styles.item}>
                  <span>Developer: </span>
                  {game.developer}
                </li>
              </ul>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <span>Genre: </span>
                  {game.genre}
                </li>
                <li className={styles.item}>
                  <span>Release Date: </span>
                  {changeFormat(game.release_date)}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.breadcrumbs}>
              <Link to={"/"} className={styles.link}>
                Free Games
              </Link>
              <span className={styles.divider}>&gt;</span>
              <span className={styles.currentPage}>{game.title}</span>
            </div>
            <h2 className={styles.title}>{game.title}</h2>
            <p className={styles.descr}>{game.short_description}</p>
            <h3 className={styles.subtitle}>About {game.title}</h3>
            <p className={styles.descr}>{game.description}</p>
            {game.screenshots.length > 0 && (
              <>
                <h3 className={styles.subtitle}>{game.title} Screenshots</h3>
                <div className={styles.screenshots}>
                  {game.screenshots.map((screen) => (
                    <img
                      src={screen.image}
                      alt="screen game"
                      key={screen.id}
                      className={styles.screen}
                    />
                  ))}
                </div>
              </>
            )}
            {game.minimum_system_requirements && (
              <>
                <h3 className={styles.subtitle}>Minimum System Requirements</h3>
                <div className={styles.info}>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <span>OS: </span>
                      {game.minimum_system_requirements.os}
                    </li>
                    <li className={styles.item}>
                      <span>Memory: </span>
                      {game.minimum_system_requirements.memory}
                    </li>
                    <li className={styles.item}>
                      <span>Storage: </span>
                      {game.minimum_system_requirements.storage}
                    </li>
                  </ul>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <span>Processor: </span>
                      {game.minimum_system_requirements.processor}
                    </li>
                    <li className={styles.item}>
                      <span>Graphics: </span>
                      {game.minimum_system_requirements.graphics}
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={styles.backImg}
          style={{ backgroundImage: `url(${game.thumbnail})` }}
        >
          <div className={styles.gradient}></div>
        </div>
      </section>
    )
  );
};

import { Link } from "react-router-dom";
import cn from "classnames";

import Logo from "/freetogame-logo.png";

import styles from "./Header.module.scss";

export const Header = function () {
  return (
    <header className={styles.header}>
      <div className={cn(styles["header__container"], "container")}>
        <Link to={"/"} className={styles["header__link"]}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

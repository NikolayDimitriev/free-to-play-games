import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import cn from "classnames";

import { UnionValues, UnionOptions } from "@/src/typing";
import arrowIcon from "/arrow.svg";

import styles from "./Select.module.scss";

type SelectProps = {
  activeValue: UnionValues;
  handleChange(value: UnionValues): void;
  options: UnionOptions;
  prefix: string;
};

export const Select = function ({
  activeValue,
  handleChange,
  options,
  prefix,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (!selectRef.current) return;

      if (e.target instanceof Element) {
        if (!selectRef.current.contains(e.target)) {
          handleClose();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className={styles.select} ref={selectRef}>
      <div className={styles.control} onClick={handleClose}>
        <div className={styles.value}>
          <span>{prefix}: </span>
          {options &&
            options.filter((option) => option.value === activeValue)[0].label}
        </div>
        <div
          className={cn(styles.icon, {
            [styles.iconOpen]: isOpen,
          })}
        >
          <img src={arrowIcon} alt="arrow icon" />
        </div>
      </div>
      <div
        className={cn(styles.menu, {
          [styles.open]: isOpen,
        })}
      >
        <ul className={styles.list}>
          {options.map((option) => (
            <li
              className={styles.option}
              key={uuidv4()}
              onClick={() => handleChange(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

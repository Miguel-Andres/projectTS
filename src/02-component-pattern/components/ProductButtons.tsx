import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style? : React.CSSProperties
}
export function ProductButtons({ className ,style}:Props) {

  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={` ${styles.buttonsContainer} ${className}`} style={style}>

      <button
        className={`${styles.buttonMinus} `}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
}
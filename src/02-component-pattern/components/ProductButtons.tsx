import styles from "../styles/styles.module.css";
import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style? : React.CSSProperties
  count? : number
}
export function ProductButtons({ className ,style }:Props) {

  const { increaseBy, counter ,maxCount } = useContext(ProductContext);

 const isMaxReached = useCallback(
    ()=>!!maxCount && counter === maxCount ,    
   [maxCount,counter]
 );

  return (
    <div className={` ${styles.buttonsContainer} ${className}`} style={style}>

      <button className={`${styles.buttonMinus} `}  onClick={() => increaseBy(-1)} >
        -
      </button>

      <div className={styles.countLabel}  >{counter }</div>

      <button className={`${styles.buttonAdd } ${isMaxReached()&& styles.disabled}`} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
}

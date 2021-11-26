
import styles from "../styles/styles.module.css";
import useProducts from '../hooks/useProducts';
import { createContext,  } from "react";
import { ProductContextProps, ProductCardProps,  } from '../interfaces/interfaces';




export const ProductContext = createContext({}as ProductContextProps)

const {Provider} = ProductContext




export const ProductCard=({children ,product,className,style,onChange,value,initialValues}:ProductCardProps)=> {

    const {counter,increaseBy,maxCount,reset,isMaxCountReached } = useProducts({onChange,product,value ,initialValues})


  return (
    <Provider  value={{counter ,increaseBy, product, maxCount }}>

    <div className={`${styles.productCard} ${className}`} style={style} >  

      {children(
        {
          count : counter ,
          reset ,
          increaseBy ,
          isMaxCountReached,
          maxCount :initialValues?.maxCount ,
          product ,
        }
      )}

     </div>
    </Provider>
  );
}

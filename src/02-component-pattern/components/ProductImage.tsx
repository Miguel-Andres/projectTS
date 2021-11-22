import React, { useContext } from 'react'
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from './ProductCard';

export interface Props {
    img?:string
    className?:string
    style?:React.CSSProperties
}

export function ProductImage({img="",className,style }:Props) {

    const {product} = useContext(ProductContext)
    


    return (
        
              <img className={ `${styles.productImg} ${className}`} style={style} src={img? img : product.img ? product.img: noImage} alt="No coffe" />
       
    )
}

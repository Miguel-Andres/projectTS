import React, { useContext } from 'react'
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from './ProductCard';



export function ProductImage({image="" }) {

    const {product} = useContext(ProductContext)

    return (
        <div>
              <img className={styles.productImg} src={product.img? product.img:noImage} alt="No coffe" />
        </div>
    )
}

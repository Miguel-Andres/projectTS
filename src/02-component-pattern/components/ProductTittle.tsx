import styles from "../styles/styles.module.css";
import React, { useContext } from 'react'

import { ProductContext } from "./ProductCard";

export function ProductTittle({title}:{title?:string}) {

    const {product}= useContext(ProductContext)
    return (
        <div>
             <span className={styles.productDescription}>{title?title:product.title}</span>
        </div>
    )
}

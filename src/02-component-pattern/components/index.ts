
import{ ProductCard as ProductCardHOC } from "./ProductCard"; 
import { ProductCardHOCProps } from '../interfaces/interfaces';

import  {ProductImage }from "./ProductImage";  
import  {ProductTittle }from "./ProductTittle";
import  {ProductButtons }from "./ProductButtons"; 


export {ProductButtons }from "./ProductButtons";  
export {ProductImage }from "./ProductImage";  
export {ProductTittle }from "./ProductTittle";


export const ProductCard  = Object.assign (ProductCardHOC,{
    Title : ProductTittle ,
    Image : ProductImage ,
    Buttons : ProductButtons ,
})


export default ProductCard
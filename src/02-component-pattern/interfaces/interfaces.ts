import { ReactElement } from "react";
import {Props as ProductTitleProps} from "../components/ProductTitle"
import {Props as ProductImageProps} from "../components/ProductImage"
import {Props as ProductButtomProps} from "../components/ProductButtons"

export interface ProductCardProps {
    product :Product
    children?: ReactElement | ReactElement[]
    className ?:string
    style ?: React.CSSProperties
    onChange?: (args :onChangeArgs)=>void
    value?:number


}

export interface Product {
    id : string ,
    title : string ,
    img?: string
}

export interface ProductContextProps{
    counter : number 
    product: Product ;
    increaseBy : (value:number)=>void;
  }


  //opcional colocar para obligar los componentes de botones images y title
  export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) :JSX.Element    
      Title :  (Props: ProductTitleProps) =>JSX.Element
      Image:   (Props: ProductImageProps) =>JSX.Element
      Buttons : (Props :ProductButtomProps)=> JSX.Element 
      
  }


  // se crean los args para definir los datos del objeto del shoopingcart

  export interface onChangeArgs{
    product :Product 
    count : number 
    
  }


  export interface ProductInCart extends Product {
    count :number
  
  
  }

import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"







export const useShoppingCart =()=>{

  const [shoppingCart,setShoppingCart] = useState<{[key:string]:ProductInCart}>({
    //"1":{...product2,count:10}
  })
 
  
 
     const handleChange =({count,product} :{count:number ,product:Product})=>{
 
      
      
              setShoppingCart(oldShoppingcart=>{
      
                  // buscamos en el state shoppinincart el id || si no existe  lo colocamos 0
                const productInCart :ProductInCart = oldShoppingcart[product.id] || {...product,count:0}
                
                // si todo es mayor a 0 hacemos la incrementacion 
                if(Math.max(productInCart.count + count ,0) >0){
                  productInCart.count += count
                  return {
                    ...oldShoppingcart,
                    [product.id]: productInCart
                    }
                }
      
                //Boramos el producto si es < 0
                    const {[product.id] : toDelete , ...rest} = oldShoppingcart       
                    return rest
                    
      
                    
                
                    // if(count === 0){
            //  const {[product.id] : toDelete , ...rest} = oldShoppingcart
      
            //  console.log({toDelete})
            //  return rest
            
            //   } 
            
            //   return {
            //     ...oldShoppingcart ,
            //     [product.id]:{...product ,count}
            //   }         
            
            })



       console.log(shoppingCart)
      }

      return{
        handleChange,
        shoppingCart,
     
      }




    }
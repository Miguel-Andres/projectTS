import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"


export const useShoppingCart =()=>{

  const [shoppingCart,setShoppingCart] = useState<{[key:string]:ProductInCart}>({
    //"1":{...product2,count:10}
  })
 
  
 
     const handleChange =({count,product} :{count:number ,product:Product})=>{
              console.log({count})      
      
              setShoppingCart(oldShoppingcart=>{
                    
                
                    if(count === 0){
             const {[product.id] : toDelete , ...rest} = oldShoppingcart
      
             console.log({toDelete})
             return rest
            
              } 
            
              return {
                ...oldShoppingcart ,
                [product.id]:{...product ,count}
              }         
            
            })

       console.log(shoppingCart)
      }

      return{
        handleChange,
        shoppingCart,
     
      }
    }
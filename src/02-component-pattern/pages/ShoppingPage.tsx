
import {
  ProductTitle,
  ProductImage,
  ProductCard,
  ProductButtons,
} from "../components";

import "../styles/custom-style.css";

import { products} from '../data/products';


const product =products[1]


export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />   
            <ProductCard
             className="bg-dark"         
             key={product.id}
             product={product}
             initialValues={{
               count : 4 ,
               maxCount : 10 ,
             }}
             >
               {({reset,count, increaseBy , isMaxCountReached , maxCount   })=>(
                  <>
              <ProductImage className="image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5) " }}/>
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-button"  />
                
                <button onClick={reset}> reset</ button> 
              <button onClick={()=>increaseBy(-2)}> -2</ button> 
              
               {(!isMaxCountReached&&<button onClick={()=>increaseBy(+2)}> +2</ button> )}  

                <span >{count} -{maxCount}</span>
              </>
               )}


            </ProductCard>
          
      </div>
  );
};

export default ShoppingPage;

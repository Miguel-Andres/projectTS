
import {
  ProductTitle,
  ProductImage,
  ProductCard,
  ProductButtons,
} from "../components";

import "../styles/custom-style.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from '../data/products';








export const ShoppingPage = () => {

 const {handleChange,shoppingCart,}=useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => {
          return (
            <ProductCard
             product={product}
             className="bg-dark"
            onChange={handleChange}
            value={shoppingCart[product.id]?.count||0}
         
             key={product.id}>
              <ProductImage
                className="image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5) " }}
              />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-button"  />
            </ProductCard>
          );
        })}
      </div>

      {JSON.stringify(shoppingCart)}

        <div className="shopping-cart" >

        {
          Object.entries(shoppingCart).map(([key,product])=>

        <ProductCard product={product}
         className="bg-dark" 
         style={{width:"100px"}}
          key={key}
          value={product.count}
          onChange={handleChange}

          >
              <ProductImage
                className="image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.5) " }}
                />
              <ProductTitle className="text-white"  />
              <ProductButtons className="custom-button" />
            </ProductCard>

          )}
           
        </div>


    </div>
  );
};

export default ShoppingPage;

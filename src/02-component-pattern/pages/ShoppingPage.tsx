import {
  ProductTitle,
  ProductImage,
  ProductCard,
  ProductButtons,
} from "../components";
import "../styles/custom-style.css"
const product = {
  id: "1",
  title: "Coffe Mug Card for props",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div >
      <h1  >Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image  className="image"/>
          <ProductCard.Title title={"por metodos"}  className="text-white"/>
          <ProductCard.Buttons  className="custom-button" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark"  >
          <ProductImage className="image"  style={{boxShadow :"10px 10px 10px rgba(0,0,0,0.5) "}}/>
          <ProductTitle title={"Prueba de props"}  className="text-white" />
          <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor:"#61DAFB"}} >
          <ProductImage style={{boxShadow :"10px 10px 10px rgba(0,0,0,0.5) "}}/>
          <ProductTitle title={"Style inline"} style={{fontWeight:"bold"}}  />
          <ProductButtons style={{display:"flex" ,justifyContent:"flex-end"}} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;

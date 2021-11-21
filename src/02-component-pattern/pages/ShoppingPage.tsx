
import {ProductTittle , ProductImage,ProductCard,ProductButtons} from  "../components"

const product= {
    id :"1",
    title :"Coffe Mug Card for props",
    img : "./coffee-mug.png"

}



export const ShoppingPage = () => {
    return (
       <div>
           <h1>Shopping Store</h1>
       <hr/>
       <div style={{display:"flex" , flexDirection:"row",flexWrap:"wrap"}}>

      
       <ProductCard  product={product}>
           <ProductImage/>
           <ProductTittle  title={"Prueba de props"}/>
           <ProductButtons/>
       </ProductCard>


       <ProductCard product={product}>
           <ProductCard.Image/>
           <ProductCard.Title title={"por metodos"}/>
           <ProductCard.Buttons />
       </ProductCard>
    
       </div>
           </div>
    )
}


export default ShoppingPage

import {Link,NavLink,Route,Routes } from "react-router-dom"

import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"


export  function Navigation() {
 

    return (
        <>
           <h2>lazy layout Pages</h2> 
           

           <ul>
               <li>
                   <Link to="lazy1" > Laze Page 1</Link>
               </li>
               <li>
                   <Link to="lazy2" > Laze Page 2</Link>
               </li>
               <li>
                   <Link to="lazy3" > Laze Page 3</Link>
                   
               </li>
               
               </ul>



            <Routes>
                <Route  path={"lazy1"}  element={<LazyPage1 />} />
                <Route  path={"lazy2"} element={<LazyPage2 />}/>
                <Route  path={"lazy3"} element={<LazyPage3 />}/>

                <Route path="*" element={<LazyPage1 />} />
                

            </Routes>



           
        </>
    )
}



import { LazyExoticComponent ,lazy} from "react";






type JSXComponent =()=>JSX.Element

const ShoppingPage = lazy(()=> import(/*webpackChunkName:"lazyPage1"*/"../02-component-pattern/pages/ShoppingPage"))
const LazyPage2 = lazy(()=> import(/*webpackChunkName:"lazyPage2"*/"../02-component-pattern/pages/LazyPage2"))
const LazyPage3 = lazy(()=> import(/*webpackChunkName:"lazyPage3"*/"../02-component-pattern/pages/LazyPage3"))


interface Route{
    path : string 
    name : string 
    Component :LazyExoticComponent<()=>JSX.Element>|JSXComponent
    children ?: []
}

export const routes:Route[] =[{
    path: "/" ,
    Component :  ShoppingPage ,
    name :"shopping Page" 
},{
    path: "/lazy2" ,
    Component :  LazyPage2 ,
    name :"lazy2" 
},{
    path: "/lazy3" ,
    Component :  LazyPage3 ,
    name :"lazy3" 
}]
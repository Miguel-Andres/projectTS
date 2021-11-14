

import { LazyExoticComponent ,lazy} from "react";





type JSXComponent =()=>JSX.Element

const LazyPage1 = lazy(()=> import(/*webpackChunkName:"lazyPage1"*/"../01-lazyload/pages/LazyPage1"))
const LazyPage2 = lazy(()=> import(/*webpackChunkName:"lazyPage2"*/"../01-lazyload/pages/LazyPage2"))
const LazyPage3 = lazy(()=> import(/*webpackChunkName:"lazyPage3"*/"../01-lazyload/pages/LazyPage3"))


interface Route{
    path : string 
    name : string 
    Component :LazyExoticComponent<()=>JSX.Element>|JSXComponent
    children ?: []
}

export const routes:Route[] =[{
    path: "/lazy1" ,
    Component :  LazyPage1 ,
    name :"lazy1" 
},{
    path: "/lazy2" ,
    Component :  LazyPage2 ,
    name :"lazy2" 
},{
    path: "/lazy3" ,
    Component :  LazyPage3 ,
    name :"lazy3" 
}]
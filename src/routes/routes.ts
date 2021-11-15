import { LazyExoticComponent ,lazy} from "react";
import {NoLazy} from '../01-lazyload/pages/NoLazy';


type JSXComponent =()=>JSX.Element

// const LazyPage1 = lazy(()=> import(/*webpackChunkName:"lazyPage1"*/"../01-lazyload/pages/LazyPage1"))

const LazyLayout = lazy(()=>import (/*webpackChunkName:"lazyLoad"*/"../01-lazyload/layout/LazyLayout"))

interface Route{
    path : string 
    name : string 
    Component :LazyExoticComponent<()=>JSX.Element>|JSXComponent
    children ?: []
}

export const routes:Route[] =[{
    path: "lazyLoad/*" ,
    Component :  LazyLayout ,
    name :"lazyLoading Nested" 
},{
    path: "NoLazy" ,
    Component : NoLazy,
    name :"No Lazyloading" 
}]
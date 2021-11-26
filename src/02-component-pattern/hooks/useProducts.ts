import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface Props {
    onChange?: (args :onChangeArgs) => void
    product :Product
    value? :number
    initialValues?: InitialValues
}

const useProducts = ({onChange ,product ,value = 0,initialValues}:Props) => {

  const [counter, setCounter] = useState<any>(initialValues?.count || value );
  const isMounted = useRef(false)

  console.log(initialValues?.count)

  const increaseBy = (value: number) => {    

      let newCount =Math.max( counter  + value, 0)  
        if(initialValues?.maxCount){
            newCount = Math.min(newCount,initialValues.maxCount)
               }
        setCounter(newCount)      
      
      onChange && onChange({count :newCount,product});

    };    
    
    const reset = ()=>{

        setCounter(initialValues?.count||value)
    }
    useEffect(() => {
        if( !isMounted.current)  return 
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
     }, [])
    
   
    return {
        reset,
        counter,
        increaseBy,
        maxCount :initialValues?.maxCount,
        isMaxCountReached : !!initialValues?.count && initialValues.maxCount ===counter

    };
};

export default useProducts;

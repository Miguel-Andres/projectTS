import { useEffect, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface Props {
    onChange?: (args :onChangeArgs) => void
    product :Product
    value? :number
}

const useProducts = ({onChange ,product ,value = 0}:Props) => {

  const [counter, setCounter] = useState(value);      
  
  const increaseBy = (value: number) => {
    

      let newCount =Math.max( counter  + value, 0)      
      
      setCounter(newCount);
      
      onChange && onChange({count :newCount,product});
    };
    useEffect(() => {
       setCounter(value)
    }, [value])
    
    return {
        counter,
        increaseBy,
    };
};

export default useProducts;

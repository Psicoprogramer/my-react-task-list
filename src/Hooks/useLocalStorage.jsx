import { useEffect, useState } from "react";

export function useLocalStorage( itemName , inicalValue){
 
  const [item, setItem] = useState(inicalValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem ;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(inicalValue))
            parsedItem = inicalValue;
  
          }else{
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true); 
      }
    }, 2000)
    },[])
  
    // creamos una funcion para actualizar los todos en el localStage
    const saveItemStorage  = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
    return {item,saveItemStorage,error,loading};
  }
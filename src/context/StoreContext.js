import { createContext,useState,useEffect } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
   
 const [cartItems,setCartItems] = useState({});

 const addToCart =(_id)=>{
      if(!cartItems[_id]){
        setCartItems((prev)=>({...prev,[_id]:1}))
      }
      else{
        setCartItems((prev)=>({...prev,[_id]:prev[_id]+1}))
      }
 }

 const removeFromCart=(_id)=>{
  setCartItems((prev)=>({...prev,[_id]:prev[_id]-1}))
 }
 useEffect(()=>{
      console.log(cartItems);
}, [cartItems])

  const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
  }
  return(
    <StoreContext.Provider value={contextValue}>  
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
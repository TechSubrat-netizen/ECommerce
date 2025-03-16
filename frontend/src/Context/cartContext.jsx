import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  let [item, setItem] = useState([]); 

  return (
    <CartContext.Provider value={{ item, setItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider; 
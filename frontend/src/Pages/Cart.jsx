/* eslint-disable no-undef */

import { useContext } from "react";
import { CartContext } from "../Context/cartContext";



export default function CartPage() {
   const {item}= useContext(CartContext)

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      
        <div className="space-y-4">
          
           {item.length>0 && <div className="flex justify-between items-center p-4 border rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">itemName</h3>
                <p className="text-gray-600">Price: Itemprice</p>
                <p className="text-gray-600">Quantity: itemQuantity</p>
              </div>
              <button
              
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
           }
         
        </div>
     
    </div>
  );
}

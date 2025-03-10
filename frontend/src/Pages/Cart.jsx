const Cart= ({ cartItems }) => {
    return (
      <div className="fixed top-0 right-0 w-80 bg-white shadow-lg p-4 h-screen overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center border-b py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="ml-4">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
    );
  };
export default Cart;
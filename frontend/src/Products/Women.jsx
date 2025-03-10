const Women = () => {
    const WomenProducts = [
      { name: "Classic Shirt", image: "/api/placeholder/600/800" },
      { name: "Casual T-Shirt", image: "/api/placeholder/600/800" },
      { name: "Slim Fit Jeans", image: "/api/placeholder/600/800" },
      { name: "Leather Shoes", image: "/api/placeholder/600/800" },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Men's Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WomenProducts.map((product, index) => (
              <div key={index} className="relative group overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition duration-300 flex items-end">
                  <div className="w-full p-4 bg-white bg-opacity-90">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export  default Women
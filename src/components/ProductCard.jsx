import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col">
      <div className="bg-nude-100 rounded-xl mb-4 flex items-center justify-center p-4 aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-32 object-contain"
        />
      </div>

      <h2 className="text-taupe-700 font-medium mb-1 line-clamp-2">
        {product.title}
      </h2>

      <p className="text-blush-600 font-semibold mb-4">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blush-100 text-blush-700 rounded-full py-2 font-medium hover:bg-blush-200 transition-colors duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
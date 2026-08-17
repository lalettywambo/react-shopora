import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="min-h-screen bg-nude-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold text-taupe-700 mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <p className="text-taupe-500 mb-6">Your cart is empty.</p>
            <Link
              to="/products"
              className="inline-block bg-blush-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blush-500 transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex flex-col gap-4">
              {cart.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-nude-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="bg-nude-100 rounded-xl p-2 shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-taupe-700 font-medium">{product.title}</h2>
                    <p className="text-blush-600 font-semibold">${product.price}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-taupe-500 hover:text-blush-600 text-sm font-medium transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 pt-6 border-t border-nude-200">
              <h2 className="text-lg font-semibold text-taupe-700">
                Total: ${total.toFixed(2)}
              </h2>

              <Link
                to="/checkout"
                className="bg-blush-400 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blush-500 transition-colors duration-200"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
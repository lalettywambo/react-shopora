import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index}>
              <img
                src={product.image}
                alt={product.title}
                width="100"
              />

              <h2>{product.title}</h2>

              <p>${product.price}</p>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
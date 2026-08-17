import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="150"
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
function ProductCard({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        width="150"
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <button>View Product</button>
    </div>
  );
}

export default ProductCard;
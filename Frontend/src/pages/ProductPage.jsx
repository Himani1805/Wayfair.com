import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/wishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Use Cart
  const { addToWishlist } = useWishlist(); // Use Wishlist

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>💖 Add to Wishlist</button>
    </div>
  );
};

export default ProductCard;

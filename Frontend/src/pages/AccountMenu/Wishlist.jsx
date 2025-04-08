import { useWishlist } from "../../contexts/wishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Get wishlist items

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? <p>Wishlist is empty</p> : 
        wishlist.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => removeFromWishlist(item.id)}>❌ Remove</button>
          </div>
        ))
      }
    </div>
  );
};

export default Wishlist;

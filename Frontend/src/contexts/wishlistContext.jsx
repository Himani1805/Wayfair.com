import { createContext, useContext, useState } from "react";

// Create Wishlist Context
const WishlistContext = createContext();

// Wishlist Provider
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]); // Wishlist state

  // Function to add product to wishlist
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]); // Add new product
  };

  // Function to remove product from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id)); // Remove by ID
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook to use Wishlist
export const useWishlist = () => useContext(WishlistContext);

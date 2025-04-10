import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import { WishlistProvider } from "./contexts/wishlistContext.jsx";
import CartProvider from "./contexts/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider value={defaultSystem}>
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </ChakraProvider>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from './App.jsx';
// import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
// import { BrowserRouter } from 'react-router-dom';


// ReactDOM.createRoot(document.getElementById("root")).render(
//     <ChakraProvider value={defaultSystem} >
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ChakraProvider>
    
// );

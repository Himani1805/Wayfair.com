import { VStack } from "@chakra-ui/react"
import Header from "./components/Header/Header"
import Signup from "./pages/Signup"
import Login from './pages/Login'
import { Routes, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Logout from "./pages/Logout"
import Dashboard from "./components/Dashboard/Banner"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductDetails"
import PaymentPage from "./pages/PaymentPage"
import WishlistPage from "./pages/AccountMenu/Wishlist"
import Cart from "./pages/Cart"
import ProductSinglePage from "./components/Common/ProductSinglePage"


function App() {
  return (
    <VStack width={"100%"}>
      <Header/>
      <Navbar/>  
      <Routes>
         <Route path="/" element={<Dashboard  />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />  
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path='/product/dining/:id' element={<ProductSinglePage />} />
              
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      <Footer/>
    </VStack>
  )
}

export default App;



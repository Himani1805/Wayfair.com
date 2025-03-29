import { VStack } from "@chakra-ui/react"
import Header from "./components/Header/Header"
import Signup from "./pages/Signup"
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Logout from "./pages/Logout"
import Dashboard from "./components/Dashboard/Banner"
import Account from "./components/Header/AccountMenu"
import MainSection from "./components/MainSection/MainSection"

function App() {
  return (
    <VStack width={"100%"}>
      <Header/>
      <Navbar/>
      <Dashboard/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <MainSection/>
      <Footer/>
    </VStack>
  )
}

export default App;



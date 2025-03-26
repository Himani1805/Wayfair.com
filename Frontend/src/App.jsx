import { VStack } from "@chakra-ui/react"
import Header from "./components/Header/Header"
import Signup from "./pages/Signup"
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Main from "./components/MainSection/Main"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <VStack width={"100%"}>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Main/>
      <Footer/>
    </VStack>
  )
}

export default App;



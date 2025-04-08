import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../components/Common/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;

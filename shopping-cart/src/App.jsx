import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shops.jsx";
import {CartProvider}from './context/CartContext'
function App() {
  return (
    <CartProvider>
       <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </Container>
   </CartProvider>
  );
}
export default App;

import { Button, Card } from "react-bootstrap";
import { getProductData } from "../data/items";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  return (
    <>
      <Card style={{ width: "150px" }}>
        <Card.Img
          variant="top"
          src={productData.image}
          style={{ objectFit: "cover" }}
        />
      </Card>

      <p style={{ marginTop: "20px" }}>Product : {productData.title}</p>

      <p>QTN : {quantity}</p>
      <p> Price : {quantity * productData.price}</p>
      <Button
        size="sm"
        className="mb-5 text-white"
        variant="btn btn-outline-secondary"
        noClick={() => cart.deleteProduct(id)}>
        Remove
      </Button>
    </>
  );
};

export default CartProduct;

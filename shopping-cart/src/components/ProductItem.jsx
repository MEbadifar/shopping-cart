import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const cart = useContext(CartContext);

  const productQuantity = cart.ProductQuantity(product.id);
  return (
    <Card className="mt-5 card-bg">
      <Card.Body>
        <Card.Img
          variant="top"
          src={product.image}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Title className="text-light pt-4">{product.title}</Card.Title>
        <Card.Text className="text-light">{product.price}</Card.Text>

        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6" className="text-white">
                qtn: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  onClick={() => cart.increament(product.id)}
                  className="mx-2 text-white"
                  column="true"
                  sm="6"
                  variant="btn btn-outline-secondary">
                  +
                </Button>
                <Button
                  onClick={() => cart.decreament(product.id)}
                  className="mx-2 text-white"
                  column="true"
                  sm="6"
                  variant="btn btn-outline-secondary">
                  -
                </Button>
              </Col>
            </Form>
            <Button
              className="my-4"
              variant="btn btn-light"
              onClick={() => cart.deleteProduct(product.id)}>
              Delete
              </Button>
          </>
        ) : (
          <Button
            onClick={() => cart.increament(product.id)}
            variant="btn btn-outline-secondary"
            className="text-white">
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductItem;

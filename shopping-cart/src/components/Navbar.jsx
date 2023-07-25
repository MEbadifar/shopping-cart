import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <NavbarBs className="border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondry"
            className="text-white">
            ({productsCount})<BsCart className="mx-2"></BsCart>
            Buy
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal show={showModal} onHide={handleClose} contentClassName="card-bg">
        <Modal.Header>
          <Modal.Body>
            {productsCount > 0 ? (
              <>
                <h3 className="mb-4">Cart</h3>
                {cart.items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  />
                ))}
                <h3>Total : {cart.TotalAmount()}</h3>
              </>
            ) : (
              <h3> Cart is Empty</h3>
            )}
            <Button
              onClick={handleClose}
              variant="btn btn-outline-secondary"
              className="mt-4 mx-3 text-white">
              close
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Navbar;

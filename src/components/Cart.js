import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../rtk/slices/cart-slice";
import { clearCart } from "../rtk/slices/cart-slice";
import { incrementQuantity, decrementQuantity } from "../rtk/slices/cart-slice";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = Math.floor(
    cart.reduce((total, product) => total + product.price * product.quantity, 0)
  );

  return (
    <>
      <div className="container py-5 mt-5 ">
   
        <button
          className="btn btn-danger mb-4"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <h5>Total Price: {totalPrice}$</h5>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Description</th>
              <th>Price </th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price * product.quantity}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "200px", height: "200px" }}
                  />
                </td>
                <td className="d-flex align-items-center gap-2">
                  {product.quantity}

                  <Button
                    variant="success"
                    size="sm"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    onClick={() => dispatch(incrementQuantity(product))}
                  >
                    <BsPlusLg style={{ color: "white" }} />
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    onClick={() => dispatch(decrementQuantity(product))}
                  >
                    <BsDashLg style={{ color: "white" }} />
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Cart;

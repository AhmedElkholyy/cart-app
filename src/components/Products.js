import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { useEffect } from "react";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-5 py-5">
        <div className="row">
          {products.map((product) => (
            <div className="col d-flex" key={product.id}>
              <Card
                style={{ width: "18rem" }}
                className="mb-4 flex-fill d-flex flex-column"
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {product.description.slice(0, 60)}...
                  </Card.Text>
                  <Card.Text>{product.price}$</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                    className="mt-auto"
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

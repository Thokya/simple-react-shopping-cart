import React from "react";
import { Button, Card } from "react-bootstrap";

import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/shoppingCartContext";
import placeHolder from "../assets/placeholder.jpg";

const StoreItem = ({ _id, name, price, imageUrl }) => {
  const imageRes = fetch(imageUrl)
    .then((res) => res)
    .catch((err) => err.message);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(_id);
  // const quantity = getItemQuantity || 0;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
        src={
          imageRes === "NetworkError when attempting to fetch resource."
            ? placeHolder
            : imageUrl
        }
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>

          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(_id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(_id)}>-</Button>

                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>

                <Button onClick={() => increaseCartQuantity(_id)}>+</Button>

                <Button
                  onClick={() => removeFromCart(_id)}
                  variant="danger"
                  size="sm"
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;

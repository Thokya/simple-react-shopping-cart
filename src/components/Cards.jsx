import React from "react";
import { Col, Row, Card } from "react-bootstrap";

import StoreItem from "./StoreItem";

const Cards = (props) => {
  const storeItems = props.props;

  return (
    <Row md={2} xs={1} lg={3} className="m-3 g-3">
      {storeItems.map((item) => (
        <Col key={item._id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Cards;

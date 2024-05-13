import React from "react";
import Booking from "./Booking";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import Rating from "react-rating-stars-component";

export default function Cars() {
  const [itemsInfoCars, setItemsّInfoCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://663c4fc617145c4d8c35c74a.mockapi.io/InfoCars")
      .then((response) => setItemsّInfoCars(response.data))
      .catch((error) => console.log(error));
  }, []);
  itemsInfoCars.sort((a, b) => b.RateCar - a.RateCar);
  return (
    <div>
      <div className="titleTxt">
        <p>اختر سيارتك</p>
      </div>
      {itemsInfoCars.map((item) => (
        <Card className="card-cars mb-3" key={item.id}>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img
                src={item.ImgCar}
                className="img-fluid rounded-start"
                alt="..."
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{item.NameCar}</Card.Title>
                <Card.Title>{item.ModelCar}</Card.Title>
                <Card.Text>{item.StateCar}</Card.Text>
                <Rating
                  count={5}
                  size={15}
                  activeColor="#ffd700"
                  value={item.RateCar}
                  edit={false}
                />
                <Accordion defaultActiveKey={["1"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <td>احجزها</td>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Booking />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}

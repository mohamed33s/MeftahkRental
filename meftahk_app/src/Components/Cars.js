import React, { useEffect, useState } from "react";
import axios from "axios";
import Booking from "./Booking";
import Accordion from "react-bootstrap/Accordion";
import { Card, Row, Col, Form, FormControl } from "react-bootstrap";
import Rating from "react-rating-stars-component";

export default function Cars() {
  const [itemsInfoCars, setItemsInfoCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://663c4fc617145c4d8c35c74a.mockapi.io/InfoCars")
      .then((response) => setItemsInfoCars(response.data))
      .catch((error) => console.log(error));
  }, []);

  itemsInfoCars.sort((a, b) => b.RateCar - a.RateCar);

  const isString = (value) => typeof value === "string";

  const filteredCars = itemsInfoCars.filter((car) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (isString(car.NameCar) &&
        car.NameCar.toLowerCase().includes(searchLower)) ||
      (isString(car.ModelCar) &&
        car.ModelCar.toLowerCase().includes(searchLower)) ||
      (isString(car.StateCar) &&
        car.StateCar.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div>
      <div className="titleTxt">
        <p>اختر سيارتك</p>
      </div>
      <Form className="mb-3 fieldSearch">
        <FormControl
          type="search"
          placeholder="أبحث عن سيارتك..."
          className="mr-2 searchInput"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      {filteredCars.length > 0 ? (
        filteredCars.map((item) => (
          <Card className="card-cars mb-3" key={item.id}>
            <Row className="g-0">
              <Col md={4}>
                <Card.Img
                  src={item.ImgCar}
                  className="img-fluid rounded-start"
                  alt={item.NameCar}
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
        ))
      ) : (
        <p className="titleTxt">لا توجد نتائج...</p>
      )}
    </div>
  );
}

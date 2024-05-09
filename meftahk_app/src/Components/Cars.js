import React from "react";
import Booking from "./Booking";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cars() {
  const [itemsInfoCars, setItemsّInfoCars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://663c4fc617145c4d8c35c74a.mockapi.io/InfoCars`)
      .then((response) => {
        console.log(response.data);
        setItemsّInfoCars(response.data);
      });
  }, []);
  return (
    <div>
      {itemsInfoCars
        .sort((a, b) => b.RateCar - a.RateCar)
        .map((item) => (
          <div class="card-cars card mb-3" key={item.id}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={item.ImgCar}
                  class="img-fluid rounded-start"
                  alt="..."
                ></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.NameCar}</h5>
                  <h4 class="card-title">{item.ModelCar}</h4>
                  <p class="card-text">{item.StateCar}</p>
                  <p class="card-text">
                    <small class="text-muted">{item.RateCar}</small>
                  </p>
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
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

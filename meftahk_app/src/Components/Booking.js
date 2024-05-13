import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";

export default function Booking() {
  const [itemsBooking, setItemsBooking] = useState([]);
  useEffect(() => {
    axios
      .get("https://663c4fc617145c4d8c35c74a.mockapi.io/Booking")
      .then((response) => setItemsBooking(response.data))
      .catch((error) => console.log(error));
  }, []);
  let all_tr = $("tr");
  $('td Button[id="buttonSeleced"]').on("click", function () {
    all_tr.removeClass("selected");
    $(this).closest("tr").addClass("selected");
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Table className="tableAppointment">
        <thead></thead>
        <tbody>
          {itemsBooking.map((item) => (
            <tr>
              <td>{item.Day}</td>
              <td>{item.Time}</td>
              <td>
                <Button
                  type="button"
                  id="buttonSeleced"
                  className="allButtons"
                  variant="outline-success"
                  onClick={handleShow}
                >
                  احجز
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>تم الحجز بنجاح</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      إلغاء
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      تم
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Booking() {
  const [itemsBooking, setItemsBooking] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://663c4fc617145c4d8c35c74a.mockapi.io/Booking")
      .then((response) => setItemsBooking(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleRowSelect = (index) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(index)) {
        return prevSelectedRows.filter((row) => row !== index);
      } else {
        return [...prevSelectedRows, index];
      }
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = (index) => {
    handleShow();
    handleRowSelect(index);
  };

  return (
    <div>
      <Table className="tableAppointment">
        <tbody>
          {itemsBooking.map((item, index) => (
            <tr
              key={item.id}
              className={selectedRows.includes(index) ? "selected" : ""}
            >
              <td>{item.Day}</td>
              <td>{item.Time}</td>
              <td>
                <Button
                  type="button"
                  id="buttonSelected"
                  className="allButtons"
                  variant="outline-success"
                  onClick={() => handleButtonClick(index)}
                >
                  احجز
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>إشعار</Modal.Title>
        </Modal.Header>
        <Modal.Body>تم الحجز بنجاح</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="primary" href="/rating">
            تم
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

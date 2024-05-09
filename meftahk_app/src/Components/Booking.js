import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import $ from "jquery";

export default function Booking() {
  const [itemsBooking, setItemsBooking] = useState([]);
  useEffect(() => {
    axios
      .get(`https://663c4fc617145c4d8c35c74a.mockapi.io/Booking`)
      .then((response) => {
        console.log(response.data);
        setItemsBooking(response.data);
      });
  }, []);
  let all_tr = $("tr");
  $('td Button[id="buttonSeleced"]').on("click", function () {
    all_tr.removeClass("selected");
    $(this).closest("tr").addClass("selected");
  });
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
                >
                  احجز
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BookingViewRating() {
  const [itemsRating, setItemsRating] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62d3e4435112e98e4846e84e.mockapi.io/commentAPI`)
      .then((response) => setItemsRating(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="formViewCooments">
        <h1>آراء العملاء</h1>
        {itemsRating.map((item) => (
          <div className="comment">
            <h4 key={item.id}>{item.Comment}</h4>
            <p>{item.Name}</p>
          </div>
        ))}
    </div>
  );
}

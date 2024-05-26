import { Form, Col, Button, Row } from "react-bootstrap";
import Rating from "react-rating-stars-component";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RatingComment() {
  const navigate = useNavigate();
  const [Name, setUserName] = useState("");
  const [Comment, setComment] = useState("");

  const addComment = () => {
    axios
      .post(`https://62d3e4435112e98e4846e84e.mockapi.io/commentAPI`, {
        Name,
        Comment,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="formRegising">
        <Form>
          <h1 style={{ textAlign: "center" }}>قيمنا!</h1>
          <br />
          <Row className="justify-content-center">
            <Col xs="auto">
              <Rating
                className="starRate"
                count={5}
                size={100}
                value={0}
                edit={true}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                placeholder="الاسم"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={(e) => {
                setComment(e.target.value);
              }}
              as="textarea"
              rows={3}
              placeholder="اكتب رايك"
            />
          </Form.Group>

          <Button
            onClick={addComment}
            id="button"
            variant="outline-light"
            size="lg"
          >
            ارسال
          </Button>
        </Form>
      </div>
    </div>
  );
}

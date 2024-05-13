import { Form, Col, Button, Row } from "react-bootstrap";
import Rating from "react-rating-stars-component";

export default function RatingComment() {
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
              <Form.Control type="text" placeholder="الاسم" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="اكتب رايك" />
          </Form.Group>

          <Button href="/" id="button" variant="outline-light" size="lg">
            ارسال
          </Button>
        </Form>
      </div>
    </div>
  );
}

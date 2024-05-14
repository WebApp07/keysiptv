import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; 2022-2024 Xente
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

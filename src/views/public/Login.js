// Librerias
import React, { useState } from "react";
import { Col, Row, Form, Container, Image, Button, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Servicios
import AuthApi from "../../AuthApi";

// Rutas
import { publicRoutes } from '../../routes/AllRoutes';

const Login = () => {
  // Variables de estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");

  // Variables globales
  const Auth = React.useContext(AuthApi);

  // Metodos
  const SendData = async (e) => {
    e.preventDefault();
    Auth.setAuth(true);
    Auth.setRole(2);
  }

  return (
    <Container fluid className="container-login">
      <Row className="vh-100">
        <Col
          xs={6}
          className="bg-light d-flex align-items-center justify-content-center max-width-mobile white-mobile"
        >
          <Container className="container-form">
            <Col className="text-center hide-desktop">
              {/* <Image src={logo} className="logo" /> */}
            </Col>
            <Col className="mt-4 no-margin-mobile hide-desktop">
              <h1 className="h1-welcome text-center">Welcome!</h1>
            </Col>
            <Row>
              <h2 className="text-center mb-4">Sign In</h2>
            </Row>
            <Row>
              <Col>
                <span className="bold-600">New user?</span>
              </Col>
              <Col className="d-flex justify-content-end">
                {/* <NavLink
                  to={publicRoutes.createAccount}
                  className="text-danger bold-600"
                >
                  Create an account
                </NavLink> */}
              </Col>
            </Row>
            <Row>
              <Form
                onSubmit={(e) => SendData(e)}
              >
                <Form.Group as={Col}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="bg-dark text-white form-control mt-4 p-3 email-input"
                    required
                    onChange={({ target }) => setEmail(target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="password"
                    placeholder="•••••••"
                    className="bg-dark text-white form-control mt-4 p-3 pass-input"
                    onChange={({ target }) => setPassword(target.value)}
                    required
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="btn btn-secondary w-100 text-white mt-4 p-3 send-input"
                >Send</Button>
              </Form>
              <Alert onClose={() => setShowAlert(false)} show={showAlert} key="danger" variant="danger" className="mt-4" dismissible>{messageAlert}</Alert>
            </Row>
          </Container>
        </Col>
        <Col
          xs={6}
          className="d-flex align-items-center justify-content-center hide-mobile"
        >
          <Container className="d-flex align-items-center justify-content-center flex-column">
            <Row>
              {/* <Image src={logo} className="logo" /> */}
            </Row>
            <Row className="mt-4">
              <h1 className="h1-welcome">Welcome!</h1>
            </Row>
            <Row className="mt-5">
              {/* <Image src={person} className="persona" /> */}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

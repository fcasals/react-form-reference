import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Form.css";

class FormSample extends React.Component {
  state = {
    email : "",
    name: "",
    age: 0,
    validated: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ validated: true });
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <h1>Form fields reference</h1>
            <h2>React Bootstrap</h2>
            <Form noValidate onSubmit={this.handleSubmit} validated={this.state.validated}>
              
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your name"
                    required
                    />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <strong>Name</strong> field is mandatory.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Validation of this field is just 'required'. No other validation rules.
                </Form.Text>                
              </Form.Group>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter a usernaname"
                    required
                    />
                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <strong>Name</strong> field is mandatory.
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Validation: required, minLength, maxLength.
                </Form.Text>                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormSample;

import React, { Component } from 'react';
import { Grid, Cell, Card } from 'react-mdl';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
// import Education from './education';
// import Experience from './experience';
// import Skills from './skills';


class Login extends Component {
  render() {
    return (
      <div style={{ margin: "auto", width: "50%", padding: "10px" }}>
        <Card style={{ margin: "auto", width: "50%", padding: "10px" }}>
          <Form>
            <h3>Login</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Username" />
              <Form.Text className="text-muted">
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form>
        </Card>
      </div>

    )
  }
}

export default Login;
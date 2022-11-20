import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import Loading from '../components/Loading';
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const [authMode, setAuthMode] = useState("SignIn");
    const [loading, setloading] = useState(true);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        localStorage.setItem('auth-token', form)
        history.push('/Home')
    };

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);
    }, [])

    const changeAuthMode = () => {
        setAuthMode(authMode === "SignIn" ? "SignUp" : "SignIn")
    }

  if (authMode === "SignIn") {
    return (
      <div className="Auth-form-container">
            {
                loading
            ?
                <Loading/>
            :
                <>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <h3 className="Auth-form-title">{authMode}</h3>
                        <div className="text-center">
                            Hint : Random Text For Login as u want
                            <p>Access Home Need Login</p>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingTop :20}}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </>
            }
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
        {
            loading
            ?
            <Loading/>
            :
            <Form>
                <h3 className="Auth-form-title">{authMode}</h3>
                <div className="text-center" style={{paddingBottom :20}}>
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                    Sign In
                </span>
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
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
        }
    </div>
  )
}

export default Login;
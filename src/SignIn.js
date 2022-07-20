import "./SignIn.css"
import {React, useState} from 'react'
import Header from "./Header"
import {Row, Col, Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import { getTokenFromUrl} from "./";
import swal from 'sweetalert';

function SignIn() {
    
    const navigate = useNavigate();

    const [signinEmail, setSigninEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signInCheck = () => {
        const regex = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
        if (signinEmail === "") {
            swal("Empty email","Please enter your email","warning")
            return;
        }else if (!signinEmail.match(regex)){
            swal("Invaid Email Format","Please enter your email in correct format","error")
            return;
          }
        if (password === "") {
            swal("Empty password","Please enter your password","warning")
            return;
        }
        swal ({
            title : "Sign in Success!",
            text: "Good to see you again",
            icon: "success",
            button: "Start"
        })
        .then(() => {
            navigate('/HeartBeatMusicWeb' , {state : {isLogin: true}});
        });

        

    }

  return (
    <div>
        <Header/>
        <div className="sign-body">
        <Container className="signin-container">
            <Row>
                <Col md={3}>
                    <h2 class>Sign in</h2>
                </Col>
                <br/><br/><br/><br/>
            </Row>

            <Form>
                <Form.Group className="mb-3" controlId="signinEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="input" placeholder="Enter your email" onChange = {e => setSigninEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signinPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e =>setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
              

              <Button variant="primary" onClick={signInCheck}>
                Sign in !!
              </Button> 
            </Form>
            <br/>

            <Link className ="signup" to="/signup" style={{textDecoration:'none'}}>
                <a class="signup-hint">Not have a Account? Sign up now!</a>
            </Link>

        </Container>
        </div>
    </div>
  )
}

export default SignIn
import "./SignIn.css"
import {React, useState} from 'react'
import Header from "./Header"
import {Row, Col, Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import { getTokenFromUrl} from "./";
import swal from 'sweetalert';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";



function SignIn({setIsLogin}) {
    const {t} = useTranslation()
    const navigate = useNavigate();

    const [signinEmail, setSigninEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signInCheck = () => {
        const regex = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
        if (signinEmail === "") {
            swal(i18n.t("Empty email"),i18n.t("Please enter your email"),"warning")
            return;
        }else if (!signinEmail.match(regex)){
            swal(i18n.t("Invaid Email Format"),i18n.t("Please enter your email in correct format"),"error")
            return;
          }
        if (password === "") {
            swal(i18n.t("Empty password"),i18n.t("Please enter your password"),"warning")
            return;
        }
        swal ({
            title : i18n.t("Sign in Success!"),
            text: i18n.t("Good to see you again"),
            icon: "success",
            button: "Start"
        })
        .then(() => {
            setIsLogin(true);
            navigate('/HeartBeatMusicWeb' );
        });

        

    }

  return (
    <div>
        <div className="sign-body">
        <Container className="signin-container">
            <Row>
                <Col md={3}>
                    <h2 class>{t("Sign in")}</h2>
                </Col>
                <br/><br/><br/><br/>
            </Row>

            <Form>
                <Form.Group className="mb-3" controlId="signinEmail">
                    <Form.Label>{t("Email address")}</Form.Label>
                    <Form.Control type="input" placeholder={t("Enter your email")} onChange = {e => setSigninEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="signinPassword">
                    <Form.Label>{t("Password")}</Form.Label>
                    <Form.Control type="password" placeholder={t("Password")} onChange={e =>setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                        {t("Never")}
                        
                    </Form.Text>
                </Form.Group>
              

              <Button variant="primary" onClick={signInCheck}>
                {t("Sign in !!")}
              </Button> 
            </Form>
            <br/>

            <Link className ="signup" to="/signup" style={{textDecoration:'none'}}>
                <a class="signup-hint">{t("Not have a Account? Sign up now!")}</a>
            </Link>

        </Container>
        </div>
    </div>
  )
}

export default SignIn



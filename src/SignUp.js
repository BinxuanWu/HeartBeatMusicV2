import {useState, React } from 'react';
import "./SignUp.css";
import {Row, Col, Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import swal from 'sweetalert';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";



function SignUp({setIsLogin}) {
  const {t} = useTranslation()
  const [username, setUsername] = useState("")
  const [signupEmail, setSignupEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigate = useNavigate();

  const signUpCheck = ()=> {
      if (username == "") {
        swal("Empty user name","Please enter your username","warning")
        return;
      }
      if (username.length > 10) {
        swal("Long User Name","Please enter at most 10 characters","warning")
        return;
      }
      const regex = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
      if (signupEmail === "") {
        swal("Empty Email","Please enter your email","warning")
        return;
      }else if (!signupEmail.match(regex)){
        swal("Invaid Email Format","Please enter your email in correct format","error")
        return;
      }

      if (password === "" ) {
        swal("Empty Password","Please enter your password","warning")
        return;
      }
      if (password.length < 6) {
        swal("Short Password","Please enter at least 6 characters","warning")
        return;
      }
      if (rePassword === "") {
        swal("Empty Password","Please re-enter your password to confirm","warning")
        return;
      }
      if (password !== rePassword) {
        swal("Different Password","The two passwords you entered do not match.","error")
        return;
      }
       swal ({
        title : "Sign up Success!",
        text: "Start your journey here!!!",
        icon: "success",
        button: "Start"
       })
       .then(() => {
          setIsLogin(true);
          navigate('/HeartBeatMusicWeb');
        });

  }



  return (
    <div className='signup-body'>
        <div className="sign-body">
        <Container className="signup-container">
            <Row>
                <Col md={3}>
                    <h2 class>{t('Sign up')}</h2>
                </Col>
                <br/><br/><br/><br/>
            </Row>

            <Form>
                <Form.Group className="mb-3" controlId="signupName">
                    <Form.Label>{t("User Name")}</Form.Label>
                    <Form.Control className='input-box' type="text" placeholder={t("Enter User Name")}  onChange={e => setUsername(e.target.value)}/>
                    <Form.Text className="text-muted password-hint" >
                        {t("username hint")}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="signupEmail">
                    <Form.Label>{t("Email address")}</Form.Label>
                    <Form.Control type="email" placeholder={t("Enter your email")} onChange={e => setSignupEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="signupPassword">
                    <Form.Label>{t("Password")}</Form.Label>
                    <Form.Control className='input-box' type="password" placeholder={t("Password")} onChange={e => setPassword(e.target.value)}/>
                    <Form.Text className="text-muted password-hint" >
                        {t('password hint')}
                        
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="signupRePassword">
                    <Form.Label>{t("re-enter")}</Form.Label>
                    <Form.Control type="password" placeholder={t("Password")} onChange={e => setRePassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                        {t("Never")}
                    </Form.Text>
                </Form.Group>

              {/* <Link class="signupBtn" to="/HeartBeatMusicWeb" style={{textDecoration:'none'}}> */}
                <Button variant="primary" onClick={signUpCheck} >
                  {t("Sign up !!")}
                </Button>
              {/* </Link> */}
              
            </Form>
            <br/>

        </Container>
        </div>
    </div>
  )
}

export default SignUp
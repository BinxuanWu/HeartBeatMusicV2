import React from 'react'
import "./Comment.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container,Row,Col} from 'react-bootstrap';


function Comment({playingSong}) {
  return (
    
    <div className='comment-body'>
        <Container style={{marginTop: '30px'}}>
            <Row>
                <Col  md={{span: 3, offset:1}}>
                    <img className='cmt-img' src={playingSong.img}></img>
                </Col>
                <Col>
                    <h1 style={{color: "#333333"}}>  {playingSong.title} </h1>
                    <br/>
                    <h4 style={{color: "#555555"}}>{playingSong.author}</h4>
                    <h4>{playingSong.album}</h4>
                </Col>
            </Row>
        </Container>
        <br/><br/>


    <ListGroup as="ul">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto cmt-li" >
          <div className="fw-bold">Subheading</div>
          Good!!!!!!!!!!!!!!!!!!Good!!!!!!!!!!!!!!!!!!!!!!!
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    </div>
    
    
  )
}

export default Comment
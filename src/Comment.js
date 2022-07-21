import React from 'react'
import "./Comment.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container,Row,Col} from 'react-bootstrap';
import {List, ListItem ,ListItemText, ListItemAvatar, Divider, Avatar, Typography} from '@mui/material';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { width } from '@mui/system';
import Button from 'react-bootstrap/Button';



const commentsList = [
  {img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uUr6Hdgdi2It0iXQTx27_wHaHU%26pid%3DApi&f=1",
  name: "Hot Coco",
  comment:"The lyrics being presented as actual lines of code gives me a warm tingly feeling. This is definitely by far one of my favorite songs Mili's put out.Also fun fact, the year 3691 BC is roughly when humans started using currency and tracking transactions, and AD 617 is a year in which many political figures were assassinated and tribal civil wars broke out. How these factor into the AI\'s development however, I guess that's for the watcher to decide."},
  {img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Aq0QcAOBqUpb1a6_Z2zyvAHaHa%26pid%3DApi&f=1",
  name: "JADE",
  comment:"I swear, the way momocashew sings is very reminiscent of Hatsune Miku. This is good. The effort most accomplished producers put into Vocaloids to make them sound just right for the song they're making is  a m a z i n g  so for momocashew to sing in a way reminiscent of than, but taking it her own way is just  f a n t a s t  i c"},
  {img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.pvXjMpBCJHTX-4mbUcLbyQHaHY%26pid%3DApi&f=1",
    name: "Aar",
  comment:"So many chills when she sang \"Not all blossoms spark\"! the eerie chanting in the beginning, and the epic and grand orchestral feeling in the chorus makes this song feel so powerful and otherworldly. I can feel the magic with each note."
  }
]

function Comment({playingSong}) {
  const {t} = useTranslation()
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

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

      {commentsList.map((cmt, i) => (
        <ListItem alignItems="flex-start" sx={{width: '96%'}}>
        <ListItemAvatar>
          <Avatar alt="" src={cmt.img} />
        </ListItemAvatar>
        <ListItemText
          primary={cmt.name}
          secondary={
            <React.Fragment style={{paddingRight: "10px"}}>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {cmt.comment}
            </React.Fragment>
          }
        />
        
      </ListItem>
      ))}
      
      
      
    </List>

    <br/>
    <div>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px', width:"97%"}}
          />
        </FloatingLabel>
        <Button variant="outline-danger">{t("Comment")}</Button>
    </div>
    

    <br/><br/><br/><br/><br/>
    
    </div>
    
    
  )
}

export default Comment


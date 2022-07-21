import React from 'react'
import "./Body.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Container, Row, Col, Card} from 'react-bootstrap'
import { duration } from '@mui/material';

const slideImages = [
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Cp8P67FzRg_4rqfNqfCyoAHaCe%26pid%3DApi&f=1',
      caption: 'Slide 1'
    },
    {
        
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pLiHxqpAD30YAOdbjOG80AHaEK%26pid%3DApi&f=1',
        caption: 'Slide 2'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hcVnbNPmyHRuN6wY0u3EQwHaE8%26pid%3DApi&f=1',
      caption: 'Slide 3'
    },
    {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.vZBp7l_C56JwH5CqX0YF6wHaEK%26pid%3DApi&f=1',
        caption: 'Slide 4'
      },
  ];

 const recommended1 = [
  {url:'https://www.game-ost.com/static/covers_soundtracks/2/2/22508_551213_small.jpg',
  title: 'Tell You World',
  author: 'Hatsune Miku  / kz',
  duration: 249},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.JtwyYZM-G7Ix7cLO8sPj4AHaHa%26pid%3DApi&f=1',
  title: 'world.execute(me);',
  author: 'Mili',
  duration: 303},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-pT1CkqubagW6oE6eHtjeQHaHa%26pid%3DApi&f=1',
  title: 'Imaginaerum',
  author:'Nightwish',
  duration: 311},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.klI-55zR9CHvjXnbgxu4NAHaHa%26pid%3DApi&f=1',
  title: 'Legends Dever Die',
  author: 'Against the Current',
  duration: 432},
  
 ]
 const recommended2 = [
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1U3o-oR_y7nRTnBeN6i6agHaHa%26pid%3DApi&f=1',
  title: 'Sun Dance',
  author: 'Aimer',
  duration: 238},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1M48qau_5M9KxCxsy_qyMgHaHa%26pid%3DApi&f=1',
  title: 'Sing Me To Sleep',
  author: 'Alan Walker',
  duration: 542},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AxLou0pmmP_SeBsq2jV9agHaHa%26pid%3DApi&f=1',
  title: 'Spitfire',
  author: 'Go2',
  duration: 423},
  {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aalecqhVphOgoYa0hBSYGwHaHa%26pid%3DApi&f=1",
  title: "Sakura",
  author: "R3HAB",
  duration:452}

 ]


const Body = ({setPlayingSong}) => {


  return (
    <div className='body'>
        <br/>

        <div>
        <div className="slideshow-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <div className = "slide-image" style={{'backgroundImage': `url(${slideImage.url})`}}>
                        </div>
                    </div>
                    ))}
            </Slide>
        </div>
        </div>
        

        <br/>


        <div>
            <Tabs>
                <TabList>
                  <Tab>Recommended</Tab>
                  <Tab>Featured this Week</Tab>
                  <Tab>Genre</Tab>
                  <Tab>Country</Tab>
                </TabList>

                <TabPanel>

                    <Container>
                      <Row>
                          {recommended1?.map((alb) => 
                            <Col>
                              <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                  <Card.Img class="card-img" src={alb.url} />
                                  <Card.Title class="card-title">{alb.title}</Card.Title>
                                  <Card.Text>{alb.author}</Card.Text>
                              </Card>
                            </Col>

                          )}
                      </Row>
                      <br/>
                      <Row>
                        {recommended2?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img class="card-img" src={alb.url}/>
                                    <Card.Title class="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </Container>
                </TabPanel>

                <TabPanel>
                    <Row>
                        {featureWeek?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img class="card-img" src={alb.url}/>
                                    <Card.Title class="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                </TabPanel>

                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            <br/><br/><br/><br/><br/>
        </div>


        
    </div>
  )
}

export default Body

const featureWeek = [

  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Exzc2z8K3f3EA0KJj3BdEAHaHa%26pid%3DApi&f=1',
  title: '最伟大的作品',
  author: 'Jay Chou',
  duration: 323},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AxLou0pmmP_SeBsq2jV9agHaHa%26pid%3DApi&f=1',
  title: 'Spitfire',
  author: 'Go2',
  duration: 429},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.klI-55zR9CHvjXnbgxu4NAHaHa%26pid%3DApi&f=1',
  title: 'Legends Dever Die',
  author: 'Against the Current',
  duration: 329},
  {url:'https://www.game-ost.com/static/covers_soundtracks/2/2/22508_551213_small.jpg',
  title: 'Tell You World',
  author: 'Hatsune Miku  / kz',
  duration: 342},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1U3o-oR_y7nRTnBeN6i6agHaHa%26pid%3DApi&f=1',
  title: 'Sun Dance',
  author: 'Aimer',
  duration: 482},
  
 ]
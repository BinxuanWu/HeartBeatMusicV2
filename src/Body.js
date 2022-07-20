import React from 'react'
import "./Body.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Container, Row, Col, Card} from 'react-bootstrap'

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
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFffndHFaPTQPoKHquvtFx9HWXfhB_ENqyg&usqp=CAU',
        caption: 'Slide 4'
      },
  ];

 const recommended1 = [
  {url:'https://www.game-ost.com/static/covers_soundtracks/2/2/22508_551213_small.jpg',
  title: 'Tell You World',
  author: 'Hatsune Miku  / kz'},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.JtwyYZM-G7Ix7cLO8sPj4AHaHa%26pid%3DApi&f=1',
  title: 'world.execute(me);',
  author: 'Mili'},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-pT1CkqubagW6oE6eHtjeQHaHa%26pid%3DApi&f=1',
  title: 'Imaginaerum',
  author:'Nightwish'},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.klI-55zR9CHvjXnbgxu4NAHaHa%26pid%3DApi&f=1',
  title: 'Legends Dever Die',
  author: 'Against the Current'},
  
 ]
 const recommended2 = [
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1U3o-oR_y7nRTnBeN6i6agHaHa%26pid%3DApi&f=1',
  title: 'Sun Dance',
  author: 'Aimer'},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1M48qau_5M9KxCxsy_qyMgHaHa%26pid%3DApi&f=1',
  title: 'Sing Me To Sleep',
  author: 'Alan Walker'},
  {url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AxLou0pmmP_SeBsq2jV9agHaHa%26pid%3DApi&f=1',
  title: 'Spitfire',
  author: 'Go2'},
  {url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aalecqhVphOgoYa0hBSYGwHaHa%26pid%3DApi&f=1",
  title: "Sakura",
  author: "R3HAB"}

 ]


function Body() {
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
                              <Card>
                                  <Card.Img class="card-img" src={alb.url}/>
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
                                <Card>
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
                  <h2>Any content 2</h2>
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
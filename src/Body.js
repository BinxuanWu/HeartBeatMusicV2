import React from 'react'
import "./Body.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Container, Row, Col, Card} from 'react-bootstrap'
import RefreshIcon from '@mui/icons-material/Refresh';
import {IconButton } from '@mui/material';
import { duration } from '@mui/material';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({

    resources: {
      en: {
        translation: {

        }
      },
      ch: {
        translation: {

        
        }
      }
    },
    lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

  });





const Body = ({setPlayingSong}) => {
  const [like,setLike] = React.useState(rock)
  const {t} = useTranslation()
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
                  <Tab>{t('Recommended')}</Tab>
                  <Tab>{t('Featured this Week')}</Tab>
                  <Tab>{t('Genre')}</Tab>
                  <Tab>{t('Country')}</Tab>
                </TabList>

                <TabPanel>

                    <Container>
                      <Row>
                          {recommended1?.map((alb) => 
                            <Col>
                              <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                  <Card.Img className="card-img" src={alb.url} />
                                  <Card.Title className="card-title">{alb.title}</Card.Title>
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
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
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
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                </TabPanel>

                <TabPanel>
                    <div>
                      <div className='genere-title'>
                            <h2>{t("Hip Hop")}</h2>
                      </div>
                      <Row>
                        {hippop?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                    <br/>
                    <div>
                      <div className='genere-title'>
                            <h2>{t("R&B")}</h2>
                      </div>
                      <Row>
                        {rb?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                    <br/>
                    <div>
                      <div className='genere-title'>
                            <h2>{t('rock')}</h2>
                      </div>
                      <Row>
                        {rock?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                    

                </TabPanel>

                <TabPanel>
                <div>
                      <Row className='genere-title'>
                            <h2>{t("China")}</h2>
                      </Row>
                      <Row>
                        {china?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                      <br/>
                      <Row className='genere-title'>
                            <h2>{t("Japan")}</h2>
                      </Row>
                      <Row>
                        {japan?.map((alb) => 
                              <Col>
                                <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                                    <Card.Img className="card-img" src={alb.url}/>
                                    <Card.Title className="card-title">{alb.title}</Card.Title>
                                    <Card.Text>{alb.author}</Card.Text>
                                </Card>
                              </Col>

                            )}
                      </Row>
                    </div>
                </TabPanel>
            </Tabs>
            
            <br/><br/>


            <div className='maylike-container'>
              <Row className='like-title'>
                    <h2>{t("You May Like")}</h2>
                    <IconButton onClick={() => {setLike(songList[Math.floor(Math.random()*songList.length)])}}>
                      <RefreshIcon class="refresh-btn"></RefreshIcon>
                    </IconButton>
              </Row>
              <Row>
                {like?.map((alb) => 
                      <Col>
                        <Card onClick = {() => setPlayingSong({img:alb.url,title:alb.title,author:alb.author, duration:alb.duration})}>
                            <Card.Img className="card-img" src={alb.url}/>
                            <Card.Title className="card-title">{alb.title}</Card.Title>
                            <Card.Text>{alb.author}</Card.Text>
                        </Card>
                      </Col>
                    )}
              </Row>
            </div>
            <br/><br/><br/><br/><br/>
        </div>


        
    </div>
  )
}

export default Body

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

 const hippop = [
    {url:'https://uproxx.com/wp-content/uploads/2022/01/babyface-ray-face.jpg?resize=768,768',
    title:'Face',
    author:'Babyface Ray',
    duration: 324},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/big-krit-digital-roses-dont-die.jpeg?resize=768,768',
    title:'Digital Roses Don’t Die',
    author:'Big KRIT',
    duration: 341},
    {url:'https://uproxx.com/wp-content/uploads/2022/03/buddy-superghetto.jpeg?resize=768,768',
    title:'Superghetto',
    author:'Buddy',
    duration: 327},
    {url:'https://uproxx.com/wp-content/uploads/2022/01/cordae-from-a-birds-eye-view.jpg?resize=768,768',
    title:'From A Bird’s Eye View',
    author:'Cordae',
    duration: 239},
    {url:'https://uproxx.com/wp-content/uploads/2022/03/denzel-curry-melt-my-eyez-see-your-future.jpeg?resize=768,768',
    title: 'Melt My Eyez See Your Future',
    author: "Denzel Curry",
    duration: 345}
 ]

 const rb = [
    {url:'https://uproxx.com/wp-content/uploads/2022/06/alex-isley-jack-dine-marigold.jpeg?resize=768,768',
    title:'Marigold',
    author:'Alex Isley',
    dutation: 235},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/Amber-Mark-three-dimensions-deep.jpg?resize=768,768',
    title:'Three Dimensions Deep',
    author:'Amber Mark',
    dutation:345},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/Blxst-Before-You-Go-.jpg?resize=768,768',
    title:'Before You Go',
    author:'Blxst',
    dutation:231},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/devvon-terrell-boys-dont-cry.jpg?resize=768,768',
    title:'Boys Don’t Cry',
    author:'Devvon Terrell',
    dutation:123},
    {url:'https://uproxx.com/wp-content/uploads/2022/06/ella-mai-heart-on-my-sleeve.jpeg?resize=768,768',
    title:'Heart On My Sleeve',
    author:'Ella Mai',
    dutation:124},
 ]

 const rock = [
  {url:'https://charts-static.billboard.com/img/2022/04/harry-styles-bma-as-it-was-po3-180x180.jpg',
  title:'As It Was',
  author:'Harry Styles',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/2022/04/lizzo-o9x-about-damn-time-f6q-180x180.jpg',
  title:'About Damn Time',
  author:'Lizzo',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/2018/01/jack-harlow-i43-180x180.jpg',
  title:'First Class',
  author:'Jack Harlow',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/1988/03/future-f8b-180x180.jpg',
  title:'Wait For U',
  author:'Future Featuring Drake & Tems',
  duration: 341},
  {url:'https://charts-static.billboard.com/img/2020/07/glass-animals-rtd-heat-waves-o3i-180x180.jpg',
  title:'Heat Waves',
  author:'Glass Animals',
  duration: 341},
 ]

 const china = [
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001F2tiR0B8GqN_1.jpg?max_age=2592000',
  title:'差一个时辰',
  author:'ycccc',
  duration: 349},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000003itOEI3nV7uq_1.jpg?max_age=2592000',
  title:'再见莫妮卡',
  author:'晓悠',
  duration: 347},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001QgxP73iI1Rp_2.jpg?max_age=2592000',
  title:'星火',
  author:'吉克隽逸',
  duration: 346},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001eUNoW3BiylU_2.jpg?max_age=2592000',
  title:'自叹不如',
  author:'恰恰恰恰恰',
  duration: 315},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000001EHYD724wZUM_2.jpg?max_age=2592000',
  title:'外婆桥',
  author:'旺仔小乔',
  duration: 348},
 ]

 const japan = [
  {url:'https://y.qq.com/music/photo_new/T002R300x300M0000033vmhr2RqtyU_1.jpg?max_age=2592000',
  title:'ブレーメン',
  author:'ヨルシカ (Yorushika)',
  duration: 346},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000003V5cCq1NDiOb_1.jpg?max_age=2592000',
  title:'逆光 ',
  author:'Ado',
  duration: 315},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M000000p8NEb4VrYqe_1.jpg?max_age=2592000',
  title:'タイムマシン',
  author:'優里',
  duration: 325},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M00000417bcn2IrFaD_1.jpg?max_age=2592000',
  title:'M八七',
  author:'米津玄師',
  duration: 345},
  {url:'https://y.qq.com/music/photo_new/T002R300x300M0000043lnEe16wSi5_1.jpg?max_age=2592000',
  title:'シャル・ウィ・ダンス？',
  author:'ReoNa',
  duration: 325},
 ]

 const other1 = [    
  {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QcEXGjyy454SHr3kHjNRtwHaHa%26pid%3DApi&f=1',
 title:'群青',
 author:'YOASOBI',
 album: '群青',
 duration:254},
 {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oQK2rD1dCKtvshj8iR9i9gHaHa%26pid%3DApi&f=1',
 title:'乙女解剖',
 author:'DECO*27/初音ミク',
 album: 'アンドロイドガール',
 duration:275},
 {url:'https://t2.genius.com/unsafe/406x406/https%3A%2F%2Fimages.genius.com%2F6b872248895ac66d8f91b2bcf516669c.1000x1000x1.jpg',
 title:'​world.execute(me);',
 author:'Mili',
 album: 'Miracle Milk',
 duration:285},
 {url:'https://images.squarespace-cdn.com/content/v1/52143a7ae4b0f9bd8308dc73/1572670051358-L6L9GBPXZ3L5XX59LGZZ/%E9%99%90%E5%AE%9A%E7%89%88_%E8%A1%A81.jpg?format=500w',
 title:'RTRT',
 author:'Mili',
 album: 'Millennium Mother',
 duration:283},
 {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nDanIoE5yIOQi-9-lc-QDgHaHa%26pid%3DApi&f=1',
 title:'DAJA VU',
 author:'Dave Rodgers',
 album: 'DEJA VU',
 duration:260}]

 const other2 = [
  {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hp6PZqeLVALtUBYosVZaCgHaHa%26pid%3DApi&f=1',
    title:'Hall of Fame',
    author:'The Script',
    album: '#3 Deluxe Version',
    duration:240},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bJHlzlWGzeYECwPHWA_XKQHaHa%26pid%3DApi&f=1',
    title:'Wolves',
    author:'Selena Gomez/Marshmello',
    album: 'Wolves',
    duration:282},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-rWyFQ4FWhRWPyniBuXT_QHaHa%26pid%3DApi&f=1',
    title:'No brand girls',
    author:'μ\'s',
    album: '',
    duration:224},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0I9QQp_DUCtroecU1wkQcQHaHa%26pid%3DApi&f=1',
    title:'FIRE BIRD',
    author:'Roselia',
    album: 'FIRE BIRD',
    duration:260},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AHdvDqpF6MicKlo7xKJ4lwHaHa%26pid%3DApi&f=1',
    title:'妄想感傷代償連盟',
    author:'DECO*27/初音ミク',
    album: 'GHOST',
    duration:234},
 ]

 const songList = [china, japan, rock, rb, hippop, featureWeek, other1, other2
];
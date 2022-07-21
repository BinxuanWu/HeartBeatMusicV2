import React from 'react'
import "./Account.css"
import {Row, Col, Container, ListGroup} from 'react-bootstrap';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


function Account({setPlayingSong}) {
    const {t} = useTranslation()
  return (
    <div>
        <div className='account-body'>
            <div className = 'account-info-container'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div >
                                <img className = 'headphoto'alt='' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DfJU0eJ7y8myiLTadQ7nBAHaHa%26pid%3DApi&f=1"/>
                            </div>
                        </Col>

                        <Col md={7} className = 'text-info-container'>
                            <div className='name-container'>
                                <h2> 
                                    <span className='name-text'>Jacky</span> 
                                </h2>
                            </div>

                            <ul className="tab-box">
                                <li className='fst'>
                                    <strong className='count'>12</strong>
                                    <span>{t("Follows")}</span>
                                </li>
                                <li>
                                    <strong className='count'>221</strong>
                                    <span>{t("Fans")}</span>
                                </li>
                                <li>
                                    <strong className='count'>14</strong>
                                    <span>{t("Post")}</span>
                                </li>
                            </ul>   

                            <div className = 'introduction'>{t("Introduction")}:&nbsp;&nbsp;  Hi, Weclome to Music World</div>

                        </Col>
                    </Row>
                </Container>
                
            </div>

            
            <div class="text-fav">{t('Favourite')}</div>

            <div className='songlist'>
                    <ul className="songlist_headerx">
                        <li className='songlist_header_name'>{t('Song')}</li>
                        <li className='songlist_header_author'>{t('Artist')}</li>
                        <li className='songlist_header_album'>{t('Albums')}</li>
                        <li className='songlist_header_time'>{t('Time')}</li>
                    </ul>
                    <ul className='songlist_list'>
                        {searchResult?.map((song, index) => 
                            index%2 === 0 ? (                                
                                <li onClick = {() => setPlayingSong({img:song.url, title: song.title, author:song.author, duration:song.duration})}>
                                <div className='songlist_item songlist_item--even'>
                                    <img className='songlist_img'src={song.url}/>
                                    <div className='songlist_songname'>{song.title}</div>
                                    <div className='songlist_artist'>{song.author}</div>
                                    <div className='songlist_time'>
                                        {`${Math.floor(song.duration/60)}`}:{`${(song.duration - Math.floor(song.duration/60) * 60) < 10 ? `0${(song.duration - Math.floor(song.duration/60) * 60)}` : (song.duration - Math.floor(song.duration/60) * 60)}`}</div>
                                    <div className='songlist_album'>{song.album}</div>
                                </div>
                                </li>
                                ) : (
                                <li onClick = {() => setPlayingSong({img:song.url, title: song.title, author:song.author, duration:song.duration})}>
                                <div className='songlist_item'>
                                    <img className='songlist_img'src={song.url}/>
                                    <div className='songlist_songname'>{song.title}</div>
                                    <div className='songlist_artist'>{song.author}</div>
                                    <div className='songlist_time'>
                                        {`${Math.floor(song.duration/60)}`}:{`${(song.duration - Math.floor(song.duration/60) * 60) < 10 ? `0${(song.duration - Math.floor(song.duration/60) * 60)}` : (song.duration - Math.floor(song.duration/60) * 60)}`}</div>
                                    <div className='songlist_album'>{song.album}</div>
                                </div>
                                </li>
                                )
                        )}
                    </ul>
                </div>
                
        </div>
        
        <br/><br/><br/><br/><br/>
    </div>
  )
}

export default Account


const searchResult = [
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9gTXbP4hJqWX_-wx7DgD7QHaHa%26pid%3DApi&f=1',
    title:'千本桜',
    author:'黒うさP/初音ミク',
    album: '千本桜',
    duration:321},
    {url:"https://1.bp.blogspot.com/-qPxSouBlGl8/WagHNY9pTHI/AAAAAAAAAdk/6TccPwoe0cMlQq5QWZ2WSgFteSx2Q9DuQCLcBGAs/s320/COVER.jpg",
    title:'Initial song',
    author:'40mP feat.初音ミク',
    album:'「Re:Start」',
    duration:274},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hp6PZqeLVALtUBYosVZaCgHaHa%26pid%3DApi&f=1',
    title:'Hall of Fame',
    author:'The Script',
    album: '#3 Deluxe Version',
    duration:240},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QcEXGjyy454SHr3kHjNRtwHaHa%26pid%3DApi&f=1',
    title:'群青',
    author:'YOASOBI',
    album: '群青',
    duration:254},
    {url:'https://images.squarespace-cdn.com/content/v1/52143a7ae4b0f9bd8308dc73/1572670051358-L6L9GBPXZ3L5XX59LGZZ/%E9%99%90%E5%AE%9A%E7%89%88_%E8%A1%A81.jpg?format=500w',
    title:'RTRT',
    author:'Mili',
    album: 'Millennium Mother',
    duration:283},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hp6PZqeLVALtUBYosVZaCgHaHa%26pid%3DApi&f=1',
    title:'Hall of Fame',
    author:'The Script',
    album: '#3 Deluxe Version',
    duration:240},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oQK2rD1dCKtvshj8iR9i9gHaHa%26pid%3DApi&f=1',
    title:'乙女解剖',
    author:'DECO*27/初音ミク',
    album: 'アンドロイドガール',
    duration:275},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0I9QQp_DUCtroecU1wkQcQHaHa%26pid%3DApi&f=1',
    title:'FIRE BIRD',
    author:'Roselia',
    album: 'FIRE BIRD',
    duration:260},
    {url:'https://t2.genius.com/unsafe/406x406/https%3A%2F%2Fimages.genius.com%2F6b872248895ac66d8f91b2bcf516669c.1000x1000x1.jpg',
    title:'​world.execute(me);',
    author:'Mili',
    album: 'Miracle Milk',
    duration:285},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AHdvDqpF6MicKlo7xKJ4lwHaHa%26pid%3DApi&f=1',
    title:'妄想感傷代償連盟',
    author:'DECO*27/初音ミク',
    album: 'GHOST',
    duration:234},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nDanIoE5yIOQi-9-lc-QDgHaHa%26pid%3DApi&f=1',
    title:'DAJA VU',
    author:'Dave Rodgers',
    album: 'DEJA VU',
    duration:260},

    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bJHlzlWGzeYECwPHWA_XKQHaHa%26pid%3DApi&f=1',
    title:'Wolves',
    author:'Selena Gomez/Marshmello',
    album: 'Wolves',
    duration:282},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-rWyFQ4FWhRWPyniBuXT_QHaHa%26pid%3DApi&f=1',
    title:'No brand girls',
    author:'μ\'s',
    album: 'No brand girls',
    duration:224},
    

]
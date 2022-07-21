import React from 'react'
import "./Search.css";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { handleBreakpoints } from '@mui/system';
import {Tabs, Tab, Box, AppBar, Typography, useTheme} from '@mui/material'

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

function Search({setPlayingSong}) {
    const {t} = useTranslation()
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
      setValue(index);
    };
    return (
    <div>
        <div className='search-body'>

        <Box sx={{ bgcolor: 'background.paper' }}> 
            <AppBar className='search-bar' position="static" >
                <Tabs 
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    
                    
                >
                    <Tab label={t('All')} {...a11yProps(0)} />
                    <Tab label={t("Songs")} {...a11yProps(1)} />
                    <Tab label={t("Artists")} {...a11yProps(2)} />
                    <Tab label={t("Albums")} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className='songlist'>
                        
                        <ul className="songlist_header">
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
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="songlist">
                        
                        <ul className="songlist_header">
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
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div className = "singer_list_text">
                        <ul className='singer_list_list'>
                            {singerList?.map((singer, index) => 
                                index%2 === 0 ? (
                                <li className='singer_list_item--even'>
                                    <h4 className='singer_list_title'>
                                        <div className='singer_list_cover'>
                                            <img class="singer_list_pic" src={singer.photo}/>
                                        </div>
                                        <span class="singer_list_title_txt">
                                            {singer.name}
                                        </span>
                                    </h4>
                                    <div className='singer_list_playlist'>
                                    {t("Play List")}: {singer.playlist}
                                    </div>
                                    <div className='singer_list_count'>
                                    {t("Fans")}: {singer.fans}
                                    </div>
                                    <div className='singer_list_other' >
                                        {singer.following? (
                                        <div className='singer_list_btn_focus' onClick={()=>{singer.following = false}}> {t("Following")}</div>
                                        ):(
                                        <div className='singer_list_btn_focus' onClick={()=>{singer.following = true}}> {t("Follow")}</div>)}
                                        
                                    </div>
                                </li>
                            ) :(
                                <li className='singer_list_item'>
                                    <h4 className='singer_list_title'>
                                        <div className='singer_list_cover'>
                                            <img class="singer_list_pic" src={singer.photo}/>
                                        </div>
                                        <span class="singer_list_title_txt">
                                            {singer.name}
                                        </span>
                                    </h4>
                                    <div className='singer_list_playlist'>
                                        {t("Play List")}: {singer.playlist}
                                    </div>
                                    <div className='singer_list_count'>
                                        {t("Fans")}: {singer.fans}
                                    </div>
                                    <div className='singer_list_other' >
                                        {singer.following? (
                                        <div className='singer_list_btn_focus' onClick={()=>{singer.following = false}}> {t("Following")}</div>
                                        ):(
                                        <div className='singer_list_btn_focus' onClick={()=>{singer.following = true}}> {t("Follow")}</div>)}
            
                                    </div>
                                </li>
                            )
                            )}
                        </ul>

                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                <div className="songlist">
                        
                        <ul className="songlist_header">
                            <li className='songlist_header_name'>{t("Album")}</li>
                            <li className='songlist_header_author'>{t("Artist")}</li>
                            <li className='alb_header_time'>{t("Publish Time")}</li>
                        </ul>
                        <ul className='songlist_list'>
                            {albumList?.map((album, index) => 
                                index%2 === 0 ? (                                
                                    <li>
                                    <div className='songlist_item songlist_item--even'>
                                        <img className='songlist_img'src={album.url}/>
                                        <div className='songlist_songname'>{album.album}</div>
                                        <div className='songlist_artist'>{album.author}</div>
                                        <div className='alb_time'>
                                            {album.date}</div>
                                    </div>
                                    </li>
                                    ) : (
                                    <li>
                                    <div className='songlist_item'>
                                        <img className='songlist_img'src={album.url}/>
                                        <div className='songlist_songname'>{album.album}</div>
                                        <div className='songlist_artist'>{album.author}</div>
                                        <div className='alb_time'>
                                        {album.date}</div>

                                    </div>
                                    </li>
                                    )

                            )}
                        </ul>
                    </div>
                </TabPanel>
            </SwipeableViews>
        </Box>
        <br/><br/><br/><br/><br/><br/><br/>
        
        </div>
        
    </div>
  )
}

export default Search

const searchResult = [
    {url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F1b43e7fd2f12583dfad7b08ace1c07c5.1000x1000x1.jpg&f=1&nofb=1",
    title:'39みゅーじっく!',
    author:'MikitoP/Hatsune Miku',
    album:'Magical Mirai 2016',
    duration:234},
    {url:"https://1.bp.blogspot.com/-qPxSouBlGl8/WagHNY9pTHI/AAAAAAAAAdk/6TccPwoe0cMlQq5QWZ2WSgFteSx2Q9DuQCLcBGAs/s320/COVER.jpg",
    title:'Initial song',
    author:'40mP feat.初音ミク',
    album:'「Re:Start」',
    duration:274},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9gTXbP4hJqWX_-wx7DgD7QHaHa%26pid%3DApi&f=1',
    title:'千本桜',
    author:'黒うさP/初音ミク',
    album: '千本桜',
    duration:321},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AHdvDqpF6MicKlo7xKJ4lwHaHa%26pid%3DApi&f=1',
    title:'妄想感傷代償連盟',
    author:'DECO*27/初音ミク',
    album: 'GHOST',
    duration:234},
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
    duration:260},
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
    album: 'No brand girls',
    duration:224},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0I9QQp_DUCtroecU1wkQcQHaHa%26pid%3DApi&f=1',
    title:'FIRE BIRD',
    author:'Roselia',
    album: 'FIRE BIRD',
    duration:260},
]


var singerList = [
    {photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WbhWmIaBXbl6Uc3DymqSXwHaHa%26pid%3DApi&f=1',    
    name:'Tom',
    playlist:2,
    fans:82,
    following: true},
    {photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8H84922DcSx9EQr0FC6W0wHaHa%26pid%3DApi&f=1',    
    name:'Jarry',
    playlist:8,
    fans:3452,
    following: false},
    {photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2XfNj0hExOH9rDZUFsLezQHaHa%26pid%3DApi&f=1',    
    name:'Tank',
    playlist:83,
    fans:342,
    following: true},
    {photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.byAaayKhxOLt5KGdhX0UjQHaHa%26pid%3DApi&f=1',    
    name:'PanPan',
    playlist:2,
    fans:52,
    following: false},
    {photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pU90K1mECcqdQiqbsY6niQHaHa%26pid%3DApi&f=1',    
    name:'Neko',
    playlist:82,
    fans:34452,
    following: false},
]

const albumList = [
    {url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2F1b43e7fd2f12583dfad7b08ace1c07c5.1000x1000x1.jpg&f=1&nofb=1",
    author:'MikitoP/Hatsune Miku',
    album:'Magical Mirai 2016',
    date:"2000-05"},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oQK2rD1dCKtvshj8iR9i9gHaHa%26pid%3DApi&f=1',
    author:'DECO*27/初音ミク',
    album: 'アンドロイドガール',
    date: '2019-02'},
    {url:'https://t2.genius.com/unsafe/406x406/https%3A%2F%2Fimages.genius.com%2F6b872248895ac66d8f91b2bcf516669c.1000x1000x1.jpg',
    author:'Mili',
    album: 'Miracle Milk',
    date:'2021-03'},
    {url:'https://images.squarespace-cdn.com/content/v1/52143a7ae4b0f9bd8308dc73/1572670051358-L6L9GBPXZ3L5XX59LGZZ/%E9%99%90%E5%AE%9A%E7%89%88_%E8%A1%A81.jpg?format=500w',
    author:'Mili',
    album: 'Millennium Mother',
    date:'2000-12'},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nDanIoE5yIOQi-9-lc-QDgHaHa%26pid%3DApi&f=1',
    author:'Dave Rodgers',
    album: 'DEJA VU',
    date:'2002-02'},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.hp6PZqeLVALtUBYosVZaCgHaHa%26pid%3DApi&f=1',
    author:'The Script',
    album: '#3 Deluxe Version',
    date: '2000-04'},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.bJHlzlWGzeYECwPHWA_XKQHaHa%26pid%3DApi&f=1',
    author:'Selena Gomez/Marshmello',
    album: 'Wolves',
    date: '2012-11'},
    {url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-rWyFQ4FWhRWPyniBuXT_QHaHa%26pid%3DApi&f=1',
    author:'μ\'s',
    album: 'No brand girls',
    date: '2013-11'},
]
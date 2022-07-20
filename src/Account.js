import React from 'react'
import "./Account.css"
import Header from "./Header"
import {Row, Col, Container, ListGroup} from 'react-bootstrap';
import Footer from "./Footer"
import { List } from '@mui/material';

function Account() {
  return (
    <div>
        <Header/>
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
                                    <span className='name-text'>User Name </span> 
                                </h2>
                            </div>

                            <ul className="tab-box">
                                <li className='fst'>
                                    <strong className='count'>12</strong>
                                    <span>Follows</span>
                                </li>
                                <li>
                                    <strong className='count'>221</strong>
                                    <span>Fans</span>
                                </li>
                                <li>
                                    <strong className='count'>14</strong>
                                    <span>Posts</span>
                                </li>
                            </ul>   

                            <div className = 'introduction'>Introduction:&nbsp;&nbsp;  Hi, Weclome to Music World</div>

                        </Col>
                    </Row>
                </Container>
                
            </div>

            <h3 class="text-fav">Favourite</h3>

            <div className='favourite-container'>
                
                <ListGroup as="ul" className='songs-container'>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mBxf_ZZCe2OWZ_ktJnqmxwHaHa%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-L341hYQdiM5EWZW-OM-pAHaHd%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jxYZYNiU3DjdQ5-9fIL_OAHaHa%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-rWyFQ4FWhRWPyniBuXT_QHaHa%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HANHNFYMofJ6sG5oIi2VdgHaHa%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Z6xc6BzHTeQ3wtPwlY8JaAHaHa%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mBxf_ZZCe2OWZ_ktJnqmxwHaHa%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                    <ListGroup.Item className='song'>
                        <img className='song-image' alt='' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-L341hYQdiM5EWZW-OM-pAHaHd%26pid%3DApi&f=1"/>
                        <div className='song-info'>
                            <span class="txt">
                                <span className='song-name'>Xxxxx Xxxxx Mmmmm Zz</span>
                                <span className='song-art'> - Aaaaaa Bbbbbbb</span>
                            </span>
                            
                        </div>
                        
                        <span className='song-time'>04:22</span>
                        <span className='song-comment'>Comment: 999+</span>
                        
                    </ListGroup.Item>
                </ListGroup>

                
                
                
            </div>
            
            
        </div>
        <Footer/>
    </div>
  )
}

export default Account
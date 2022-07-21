import React from 'react'
import "./Search.css";

import Header from "./Header"
import Footer from "./Footer"

import {Row, Col, Container, ListGroup} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { handleBreakpoints } from '@mui/system';

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

function Search() {
  return (
    <div>
        
        <div className='search-body'>

       <Nav className="serch-navs" justify variant="tabs" defaultActivityKey="link-all" activeKey={1} onSelect = {handleSelect}>
            <Nav.Item className = "search-nav-sel">
             <Nav.Link className = "search-nav-link-sel" eventKey="link-all" >
               All
             </Nav.Link>
            </Nav.Item>

            <Nav.Item className = "search-nav">
             <Nav.Link className = "search-nav-link" eventKey="link-songs" >
               Songs
             </Nav.Link>
            </Nav.Item>

            <Nav.Item className = "search-nav">
             <Nav.Link className = "search-nav-link" eventKey="link-artists" >
               Artists
             </Nav.Link>
            </Nav.Item>

            <Nav.Item className = "search-nav">
             <Nav.Link className = "search-nav-link" eventKey="link-albums" >
               Albums
             </Nav.Link>
            </Nav.Item>

       </Nav>

        <div className='result-container'>
                <ListGroup as="ul" className='songs-container'>
                    <ListGroup.Item className='song'>
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mBxf_ZZCe2OWZ_ktJnqmxwHaHa%26pid%3DApi&f=1"/>
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
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-L341hYQdiM5EWZW-OM-pAHaHd%26pid%3DApi&f=1"/>
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
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jxYZYNiU3DjdQ5-9fIL_OAHaHa%26pid%3DApi&f=1"/>
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
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-rWyFQ4FWhRWPyniBuXT_QHaHa%26pid%3DApi&f=1"/>
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
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HANHNFYMofJ6sG5oIi2VdgHaHa%26pid%3DApi&f=1"/>
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
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Z6xc6BzHTeQ3wtPwlY8JaAHaHa%26pid%3DApi&f=1"/>
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
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mBxf_ZZCe2OWZ_ktJnqmxwHaHa%26pid%3DApi&f=1"/>
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
                        <img className='song-image' src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-L341hYQdiM5EWZW-OM-pAHaHd%26pid%3DApi&f=1"/>
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
        
    </div>
  )
}

export default Search
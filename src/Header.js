import React, { useEffect ,useState} from 'react'
import './Header.css'
// Import Icon
import PersonIcon from '@mui/icons-material/Person';
import logo from "./images/logo.png";
import { IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link , useNavigate, useLocation} from "react-router-dom";
// import {isAuth} from "../../utils/auth";

function Header() {
    
    var isLogin = false;

    const location = useLocation();
    try {
        isLogin = location.state.isLogin;
        console.log(isLogin+"xxxxx")
    }catch(e) {
        console.log("!!!!!!!!!!!!")
    }

    
  return (
    // BEM
    <div className='header'>
        
        <div>
        <Link className ="main" to="/HeartBeatMusicWeb" style={{textDecoration:'none'}}>
            <img className = "header_logo"
            src = {logo}
            alt = "heartbeat-logo"
            />
        </Link>
        </div> 

        <div className='header_search'>
            <input
                placeholder="Search!"
                type='text'
            />
            <Link className='searchBtn' to="/search" style={{textDecoration:'none'}}>
                <SearchIcon/>
            </Link>
        </div>
        

        <div className='header_right'>
            {isLogin ? (
            <div style={{display: 'flex', alignItems: 'center'}}> 
                <Link className = "accountBtn" to="/account" style={{textDecoration:'none'}} >
                    <IconButton>
                        <PersonIcon className= "header_icon" style={{ color: "white" }} fontSize="large"/>
                    </IconButton>

                </Link>
                <Link className ="signin" to="/" style={{textDecoration:'none'}} state={{isLogin:false}}>
                    <h6>Sign out</h6>
                </Link>
            </div>
            ) : (   
            <Link className ="signin" to="/signin" style={{textDecoration:'none'}} >
                <h4>Sign in</h4>
            </Link>
            )
            }

        </div>
        

    </div>
  )
}

export default Header
import React, { useEffect ,useState} from 'react'
import './Header.css'
// Import Icon
import PersonIcon from '@mui/icons-material/Person';
import logo from "./images/logo.png";
import { IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link , useNavigate, useLocation} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { ButtonGroup } from 'react-bootstrap';
import LanguageIcon from '@mui/icons-material/Language';


const languages = [
    {code: "en",
    name: 'English',
    country_code : 'en'  
    },
    {code: "ch",
    name: '简体中文',
    country_code : 'ch'  
    }
]

function Header({isLogin,setIsLogin}) {
    const {t} = useTranslation();

    try {
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
                placeholder={t("Search")}
                type='text'
            />
            <Link className='searchBtn' to="/search" style={{textDecoration:'none'}}>
                <SearchIcon/>
            </Link>
        </div>
        

        <div className='header_right'>
          <Dropdown as={ButtonGroup} className="translate">
            <Dropdown.Toggle >
              <LanguageIcon/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={ ()=> i18next.changeLanguage('en')}>English</Dropdown.Item>
              <Dropdown.Item onClick={ ()=> i18next.changeLanguage('ch')}>简体中文</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            {isLogin ? (
            <div style={{display: 'flex', alignItems: 'center'}}> 

                <Link className = "accountBtn" to="/account" style={{textDecoration:'none'}} >
                    <IconButton>
                        <PersonIcon className= "header_icon" style={{ color: "white" }} fontSize="large"/>
                    </IconButton>

                </Link>
                <Link className ="signin" to="/" style={{textDecoration:'none'}} onClick={() => setIsLogin(false)}>
                    <h6>{t("Sign out")}</h6>
                </Link>
            </div>
            ) : (   
            <Link className ="signin" to="/signin" style={{textDecoration:'none'}} >
                <h4>{t("Sign in")}</h4>
            </Link>
            )
            }

        </div>
        

    </div>
  )
}

export default Header
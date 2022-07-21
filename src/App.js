import Header from "./Header"
import Body from "./Body";
import Footer from "./Footer"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Account from "./Account"
import Search from "./Search"
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import React ,{ useState } from "react";

import './App.css';

function App() {
  const [playingSong, setPlayingSong] = React.useState({
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V135E5CiVbo76oo5qoBOGAHaGl%26pid%3DApi&f=1",
    title: "依存香炉",
    author: 'DECO*27/Hatsune Miku',
    duration: 200})

  const [isLogin, setIsLogin] = React.useState(false);

  localStorage.setItem('isLogin', false);

  return (
    <div className="App">


    <BrowserRouter>
      <Routes>

        <Route path="/HeartBeatMusicWeb" 
          element={<>
            <Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
            <Body setPlayingSong={setPlayingSong}/>
            <Footer playingSong={playingSong}/></>
          }/>

        <Route path="/HeartBeatMusicWebV2" 
          element={<>
            <Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
            <Body setPlayingSong={setPlayingSong}/>
            <Footer playingSong={playingSong}/></>
          }/>
          <Route path="/HeartBeatMusicV2" 
          element={<>
            <Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
            <Body setPlayingSong={setPlayingSong}/>
            <Footer playingSong={playingSong}/></>
          }/>

        <Route path="/" 
          element={<>
            <Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
            <Body setPlayingSong={setPlayingSong}/>
            <Footer playingSong={playingSong}/></>
          }/>


        <Route path="/signin" 
          element={
            <><Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
            <SignIn setIsLogin = {setIsLogin}/></>
          
          }/>

        <Route path="/signup" 
          element={
            <><Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
            <SignUp setIsLogin = {setIsLogin}/></>}/>

        <Route path="/account" 
          element={
          <>
          <Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
          <Account/>
          <Footer playingSong={playingSong}/>
          </>}/>

        <Route path="/search"
          element={<>
          <Header isLogin = {isLogin} setIsLogin = {setIsLogin}/>
          <Search/>
          <Footer playingSong={playingSong}/></>
          }/>

        
      </Routes>
    </BrowserRouter>

      
      
    </div>
  );
}

export default App;

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
    author: 'DECO*27/Hatsune Miku'})

  localStorage.setItem('isLogin', false);

  return (
    <div className="App">



    <BrowserRouter>
      <Routes>

        <Route path="/HeartBeatMusicWeb" 
          element={<>
            <Header/>
            <Body setPlayingSong={setPlayingSong}/>
            <Footer playingSong={playingSong}/></>
          }/>

        <Route path="/HeartBeatMusicWebV2" 
          element={<>
            <Header/>
            <Body setPlayingSong={setPlayingSong}/>
            <Footer playingSong={playingSong}/></>
          }/>

        <Route path="/" 
          element={<>
            <Header/>
            <Body setPlayingSong={setPlayingSong}/>
            <Footer playingSong={playingSong}/></>
          }/>

        <Route path="/signin" 
          element={
          <SignIn/>
          }/>

        <Route path="/signup" 
          element={<SignUp/>}/>

        <Route path="/account" 
          element={<Account/>}/>

        <Route path="/search"
          element={<Search/>}/>

        
      </Routes>
    </BrowserRouter>

      
      
    </div>
  );
}

export default App;

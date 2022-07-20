import Header from "./Header"
import Body from "./Body";
import Footer from "./Footer"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Account from "./Account"
import Search from "./Search"
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

import './App.css';

function App() {
  localStorage.setItem('isLogin', false);

  return (
    <div className="App">



    <BrowserRouter>
      <Routes>

        <Route path="/HeartBeatMusicWeb" 
          element={<>
            <Header/>
            <Body/>
            <Footer/></>
          }/>

        <Route path="/" 
          element={<>
            <Header/>
            <Body/>
            <Footer/></>
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

import React from "react";
import Header from './components/Header/';
import {GlobalStyle} from './GlobalStyle';
import Home from './views/Home/index';
function App() {
  return(
    <div className="App">
    <GlobalStyle/>
    <Header/>
    <Home/>
    </div>
  )
    
}

export default App;

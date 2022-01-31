import {React} from 'react';

import './App.css';
import Home from './Components/Home';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import { Helmet } from "react-helmet"

function App() {

  let content=<></>;
  switch (window.location.pathname) {
    default: content= <Home />; break;
  }
  return (
    <div className="App">
      <Helmet>
        <title>Dapz</title>
        <meta name="description" content="Dapz's personal website. Game Design, Software Engineering, Digital Art" />
        <meta name="keywords" content="" />
        <meta name="author" content="Dapz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      <Banner/>
      <NavBar/>
      <div id="content">
        {content}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

import { React } from 'react';

import "./Pages.css";
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Merch from './Components/Merch';
import Error from './Components/Error';

import Banner from './Components/Banner';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import { Helmet } from "react-helmet"

function App() {

  let content = <></>;
  switch (window.location.pathname) {
    case "/projects": content = null; break;
    case "/contact": content = <Contact />; break;
    case "/merch": content = <Merch />; break;
    case "/": content = <Home />; break;
    default: content = <Error />; break;
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
      <Banner />
      <NavBar />
      <div id="content">
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default App;

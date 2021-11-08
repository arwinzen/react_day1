import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Home from './Home';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Work from './containers/work';
import Header from './containers/header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Contact />
    <Work />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

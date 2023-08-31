import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
let count=0;

setInterval(function(){
  const four = Math.floor(count/1000);
  const three = Math.floor(count/100);
  const two = Math.floor(count/10);
  const one = Math.floor(count/1);
  console.log(four, three, two, one)
  count++

  root.render(
    <React.StrictMode>
    <App digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>
  </React.StrictMode>
);
},1000)

reportWebVitals();

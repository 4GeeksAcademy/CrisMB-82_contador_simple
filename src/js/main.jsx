import React from 'react'
import ReactDOM from 'react-dom/client'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
const root = ReactDOM.createRoot(document.getElementById('root'))
let counter = 0;
setInterval(() => {
  const six = Math.floor(counter/100000)
  const five = Math.floor((counter % 100000)/10000)
  const four = Math.floor((counter % 10000)/1000)
  const three = Math.floor((counter % 1000)/100)
  const two = Math.floor((counter % 100)/10)
  const one = Math.floor((counter % 10))
  counter ++;
  root.render(
    <React.StrictMode>
      <Home six={six} five={five} four={four} three={three} two={two} one={one} />
    </React.StrictMode>,
  )
}, 1000);



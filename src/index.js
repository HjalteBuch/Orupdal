import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import HeroText from './HeroText';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <section class="flex flex-col h-screen bg-slate-100 bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30 text-white" style={{'background-image': 'url("/vegetables.jpg")'}} >
            <Navbar />
            <HeroText />
        </section>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

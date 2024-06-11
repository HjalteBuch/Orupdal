import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import HeroText from './HeroText';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <hero class="flex flex-col h-screen bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30 text-black" style={{'background-image': 'url("/vegetables.jpg")'}} >
            <Navbar />
            <HeroText />
        </hero>
        <insta>
            <div class="m-10 grid grid-flow-row grid-cols-3 gap-36 justify-center">
                <img src="/pigerne.jpg" alt="pigerne" class="size-auto"></img>
                <img src="/grønsager.jpg" alt="pigerne" class="size-auto"></img>
                <img src="/grønsagekasser.jpg" alt="pigerne" class="size-auto"></img>
                <img src="/gruppebillede.jpg" alt="pigerne" class="size-auto"></img>
                <img src="/seeds.jpg" alt="pigerne" class="size-auto"></img>
                <img src="/seedsihånd.jpg" alt="pigerne" class="size-auto"></img>
            </div>
        </insta>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

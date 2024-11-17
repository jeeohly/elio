import React, { useEffect } from 'react';
import './App.css';
import { useSpring, animated } from "react-spring";
import elio_events from "./events";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import captainIcon from './assets/captain_face.png';
import tofuIcon from './assets/tofu_face.png';
import luffyTofu from './assets/pixel/luffy_tofu.gif'
import toastCap from './assets/pixel/captain.gif'
import gif1 from './assets/01.gif';
import gif2 from './assets/02.gif';
import gif3 from './assets/03.gif';
import gif4 from './assets/04.gif';


function get_days(): number{
  const targetDate = new Date('2022-11-06');
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
  return Math.floor(daysDifference);
}

const custom_style = {
  color: '#145b78',
}

const captain_style = {
  background: '#fdea7b',
  backgroundImage: `url(${captainIcon})`,
  backgroundSize: 'cover',
}

const tofu_style = {
  background: '#6ca580',
  backgroundImage: `url(${tofuIcon})`,
  backgroundSize: 'cover' 
}

interface NumberProps {
  n: number;
}

function DisplayDays({ n }: NumberProps) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n, 
    delay: 200, 
    config: {mass: 1, tension: 20, friction: 10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function scrollToContent(class_name: string) {
  const contentSection = document.querySelector(class_name);
  if (contentSection) {
    contentSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const CaptainGameComponent: React.FC = () => {
  const divStyles = {
    margin: '5px',
  };
  const captionStyles: React.CSSProperties = { 
    textAlign: 'center',
  }
  return (
    <div style={divStyles}>
      <p style={captionStyles}>WASD/arrow_keys to move player, press SPACE to start</p>
      <iframe
        className="captain-content"
        scrolling="no"
        src="https://jeeohly.github.io/captain/gh_pages/test_game"
        width="640"
        height="480"
      ></iframe>
    </div>
  );
};


function App() {
  useEffect(() => {
    addRandomImages();
    addGifs();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="elio-days">
          ELIO
          <DisplayDays n={get_days()} />
          DAYS
        </h1>
        <div className="scroll-indicator">
          <div onClick={() => scrollToContent('.timeline-content')}>
            Timeline
          </div>
          <div onClick={() => scrollToContent('.captain-content')}>
            Captain
          </div>
        </div>
      </header>
      <VerticalTimeline className='timeline-content' layout='2-columns'>
        {elio_events.map((elio_event) => {
          let isTofu = elio_event.id >= 3;
          let hasImg = elio_event.img !== 'none';
          return (
            <VerticalTimelineElement 
              key={elio_event.id} 
              date={elio_event.date}
              iconStyle={isTofu ? tofu_style: captain_style}
              style={custom_style}
            >
              <h3 className="vertical-timeline-element-title">
                {elio_event.title}
              </h3>
              <h5> 
                📍 {elio_event.location}
              </h5>
              {hasImg ? <img src={elio_event.img} className="timeline-imgs"></img>: null}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <CaptainGameComponent></CaptainGameComponent> 
    </div>
  );
}


const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addGifs = (): void => {
  const container = document.querySelector('.App-header') as HTMLElement;
  const gifs = [gif1, gif2, gif3, gif4];
  const positionRanges = [
    { topMin: 0, topMax: 20, leftMin: 0, leftMax: 20 },
    { topMin: 20, topMax: 40, leftMin: 20, leftMax: 40 },
    { topMin: 40, topMax: 60, leftMin: 40, leftMax: 60 },
    { topMin: 60, topMax: 80, leftMin: 60, leftMax: 80 },
  ];
  gifs.forEach((gifSrc, index) => {
    const gif = document.createElement('img');
    gif.src = gifSrc; // Use the imported GIF
    gif.alt = ""; // Add an empty alt attribute for decorative images
    gif.className = 'spam-image';
    const range = positionRanges[index % positionRanges.length];
    gif.style.top = `${getRandomInt(range.topMin, range.topMax)}%`;
    gif.style.left = `${getRandomInt(range.leftMin, range.leftMax)}%`;
    gif.style.width = '200px'; // Set max width
    gif.style.height = 'auto'; // Maintain aspect ratio
    gif.style.position = 'absolute';
    container.appendChild(gif);
  });
};

const addRandomImages = (): void => {
  const container = document.querySelector('.App-header') as HTMLElement;
  const numberOfImages = 10;

  for (let i = 0; i < numberOfImages; i++) {
    const img = document.createElement('img');
    if (i % 2 == 0){
      img.src = luffyTofu;
    }else{
      img.src = toastCap;
    }
    img.alt = "";
    img.className = 'spam-image';
    img.style.top = `${getRandomInt(0, 90)}%`;
    img.style.left = `${getRandomInt(0, 90)}%`;
    img.style.position = 'absolute';
    img.style.width = '100px';
    img.style.height = '100px';
    container.appendChild(img);
  }
};

export default App;


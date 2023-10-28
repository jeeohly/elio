import React from 'react';
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

const scrollToContent = () => {
  const additionalContent = document.querySelector('.additional-content');
  if (additionalContent) {
    additionalContent.scrollIntoView({ behavior: 'smooth' });
  }
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="elio-days">
          ELIO
          <DisplayDays n={get_days()} />
          DAYS
        </h1>
        <div className="scroll-indicator" onClick={scrollToContent}>
          Timeline
        </div>
      </header>
      <VerticalTimeline className='additional-content' layout='2-columns'>
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
    </div>
  );
}

export default App;


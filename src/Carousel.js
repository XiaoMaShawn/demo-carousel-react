import React, { useEffect, useState } from 'react';
import CarouselItem from './CarouselItem';

import './Carousel.css';

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log('ActiveIndex:', activeIndex);
  const [pause, setPause] = useState(false);

  const updateIndex = (newIndex) => {
    //infinite carousel, when you are in page 1, click prev, it goes back to page 3
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    }
    //when you are in page 3 and click next, it goes to page 1 
    else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    };
    // console.log('index:', newIndex);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  })

  return (
    <div
      className='carousel'
      onMouseEnter={() => { setPause(true) }}
      onMouseLeave={() => { setPause(false) }}
    >
      <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className='indicators'>
        <button onClick={() => { updateIndex(activeIndex - 1) }}>Prev</button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}>
              {index + 1}
            </button>
          )
        })}
        <button onClick={() => { updateIndex(activeIndex + 1) }}>Next</button>
      </div>
    </div>
  );
};
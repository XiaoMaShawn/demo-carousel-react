import React, { useState } from 'react';
import CarouselItem from './CarouselItem';

import './Carousel.css';

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log('ActiveIndex:', activeIndex);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    };
    console.log('index:', newIndex);
    setActiveIndex(newIndex);
  };

  return (
    <div className='carousel'>
      <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className='indicators'>
        <button onClick={() => { updateIndex(activeIndex - 1) }}>Prev</button>
        <button onClick={() => { updateIndex(activeIndex + 1) }}>Next</button>
      </div>
    </div>
  );
};
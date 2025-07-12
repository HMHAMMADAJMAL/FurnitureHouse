import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ items, renderItem, itemsToShow = 4, title }) => {
  const [current, setCurrent] = useState(0);
  const maxIndex = Math.max(0, items.length - itemsToShow);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <div className="carousel-section">
      {title && <h2 className="carousel-title">{title}</h2>}
      <div className="carousel">
        <button className="carousel-arrow left" onClick={prev} disabled={current === 0}>&#8592;</button>
        <div className="carousel-track">
          {items.slice(current, current + itemsToShow).map(renderItem)}
        </div>
        <button className="carousel-arrow right" onClick={next} disabled={current === maxIndex}>&#8594;</button>
      </div>
    </div>
  );
};

export default Carousel; 
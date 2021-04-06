import React, { useState } from "react";
import * as styles from "./Carousel.module.css";
import PropTypes from "prop-types";

export default function Carousel({ children }) {
  const [active, setActive] = useState(0);
  const { length } = children;

  const nextSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1);
  };

  const prevSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1);
  };

  const setIndex = (index) => {
    setActive(index);
  };

  const Dot = ({ active, index }) => (
    <span
      className={active === true ? styles.active + " " + styles.dot : styles.dot}
      onClick={() => setIndex(index)}
    >
      {index + 1}
    </span>
  );

  const Dots = ({ active, children }) => {
    return (
      <div className={styles.dots}>
        {children.map((child, i) => {
          return <Dot key={i} active={active === i} index={i} />;
        })}
      </div>
    );
  };

  return (
    <div className={"carousel " + styles.root}>
      <div className={"carousel--container " + styles.container}>
        {children.map((item, i) => (
          <div
            key={"carousel-item-" + i}
            className={"carousel--item " + styles.item + (i === active ? " " + styles.active : "")}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={"carousel--controls " + styles.controls}>
        <button className={"carousel--controls--prev " + styles.prev} onClick={() => prevSlide()}>
          Prev
        </button>
        <button className={"carousel--controls--next " + styles.next} onClick={() => nextSlide()}>
          Next
        </button>
      </div>
      <Dots children={children} active={active} />
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

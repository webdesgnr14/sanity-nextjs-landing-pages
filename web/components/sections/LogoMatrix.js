import React from "react";
import PropTypes from "prop-types";
import styles from "./LogoMatrix.module.css";
import SimpleBlockContent from "../SimpleBlockContent";
import Figure from "../Figure";
import Carousel from "../Carousel";
import { chunkArray } from "../../inc/utils";

function LogoMatrix(props) {
  let slideContainer;

  const { heading, subheading, logos } = props;

  const slides = logos.map((item) => {
    return <Figure node={item.logo} key={item._key} />;
  });

  if (slides.length > 2) {
    let newSet = chunkArray(slides, 2);
    slideContainer = newSet;
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.subheading}>
          {subheading && <SimpleBlockContent blocks={subheading} />}
        </div>
        {slides && (
          <div className={styles.logos}>
            <Carousel children={slideContainer.length > 2 ? slideContainer : slides} />
          </div>
        )}
      </div>
    </div>
  );
}

LogoMatrix.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.array,
  logos: PropTypes.arrayOf(PropTypes.object),
};

export default LogoMatrix;

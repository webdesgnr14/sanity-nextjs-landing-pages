import React from "react";
import PropTypes from "prop-types";
import styles from "./LogoMatrix.module.css";
import SimpleBlockContent from "../SimpleBlockContent";
import Figure from "../Figure";

function AccordionSection(props) {
  const { heading, subheading, logos } = props;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.subheading}>
          {subheading && <SimpleBlockContent blocks={subheading} />}
        </div>
        {logos && (
          <div className={styles.logos}>
            {logos.map((item) => {
              return <Figure node={item.logo} key={item._key} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

AccordionSection.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.array,
  accordion: PropTypes.arrayOf(PropTypes.object),
};

export default AccordionSection;

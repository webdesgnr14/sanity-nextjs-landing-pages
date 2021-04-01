import React from "react";
import PropTypes from "prop-types";
import styles from "./AccordionSection.module.css";
import SimpleBlockContent from "../SimpleBlockContent";
import AccordionItem from "../AccordionItem";

function AccordionSection(props) {
  const { heading, subheading, accordion } = props;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.subheading}>
          {subheading && <SimpleBlockContent blocks={subheading} />}
        </div>
        {accordion && (
          <div className={styles.accordion}>
            {accordion.map((item) => (
              <AccordionItem {...item} key={item._key} />
            ))}
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

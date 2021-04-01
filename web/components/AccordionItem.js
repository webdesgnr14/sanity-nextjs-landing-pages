import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AccordionItem.module.css";
import SimpleBlockContent from "./SimpleBlockContent";

function AccordionItem(props) {
  const { accordionTitle, accordionContent } = props;
  const [toggle, setToggle] = useState(false);
  const toggleClass = toggle ? " accordion-item--open" : "";

  function toggleItem() {
    setToggle(toggle ? false : true);
  }

  return (
    <div className={"accordion-item " + styles.root + toggleClass}>
      <div
        className="accordion-item--title"
        onClick={() => {
          toggleItem();
        }}
      >
        <h3 className={styles.title}>{accordionTitle}</h3>
      </div>
      {toggle && (
        <div className={"accordion-item--content " + styles.content}>
          {accordionContent && <SimpleBlockContent blocks={accordionContent} />}
        </div>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  accordionTitle: PropTypes.string,
  accordionContent: PropTypes.array,
};

export default AccordionItem;

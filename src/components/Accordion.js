import React, { useState } from "react";
import arrow from "../assets/Arrow-accordion.png";
import '../styles/Accordion.css'

function Accordion({ title, description }) {
      const [open, setOpen] = useState(false);

      return (
            <div className="accordion" id={`accordion-${title}`}>
                  <div className="header-accordion">
                        <div className="accordion-title">{title}</div>
                        <span className={`accordion-arrow ${open}`} onClick={() => setOpen(!open)}>
                              <img src={arrow} alt="Ouvrir cette liste" />
                        </span>
                  </div>
                  {
                        open && <div className="accordion-description">{description}</div>
                  }
            </div>
      );
}

export default Accordion;
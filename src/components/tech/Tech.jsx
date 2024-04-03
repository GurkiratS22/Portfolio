import React from "react";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import "./tech.scss";

const Tech = () => {
  return (
    <div className="tech">
      {technologies.map((technology) => (
        <div className="icon" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
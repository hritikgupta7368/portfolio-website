import React from "react";
const Icons = ({ icon }) => {
  return (
    <div className="icon">
      <img src={icon} alt="react" />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills_root">
      <h1>Skills and Tech Stack</h1>
      <ul className="icon-container">
        <Icons icon={"react.png"} />
        <Icons icon={"nextjs.svg"} />
        <Icons icon={"react.png"} />
        <Icons icon={"nextjs.svg"} />
      </ul>
    </div>
  );
};

export default Skills;

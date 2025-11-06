import React from "react";

const SkillList = React.memo(({ skills, onDelete }) => {
  console.log("SkillList rendered");

  return (
    <ul>
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          onClick={() => onDelete(skill)}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;
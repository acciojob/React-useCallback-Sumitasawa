import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";

const App = () => {
 
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [newSkill, setNewSkill] = useState("");

 
  const addSkill = useCallback(() => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills((prevSkills) => [...prevSkills, trimmedSkill]);
      setNewSkill("");
    }
  }, [newSkill, skills]);

  
  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
  }, []);

  return (
    <div >
      <h2 id="heading">Skill Manager using useCallback</h2>

      <div>
        <input
          id="skill-input"
          type="text"
          value={newSkill}
          placeholder="Enter a skill"
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button id="skill-add-btn" onClick={addSkill} >
          Add Skill
        </button>
      </div>

      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default App;
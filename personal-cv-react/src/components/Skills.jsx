function Skills({ showSkills, skills }) {
  if (!showSkills) return null;

  return (
    <section className="card" id="skillsSection">
      <h2>Skills</h2>
    <ul>
    {skills.map((skill, index) => (
    <li key={index}>{skill}</li>
    ))}
    </ul>
     
    </section>
  );
}

export default Skills;
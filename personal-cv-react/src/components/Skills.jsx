function Skills({ showSkills }) {
  if (!showSkills) return null;

  return (
    <section className="card" id="skillsSection">
      <h2>Skills</h2>

      <ul>
        <li>
          Graphic Designing
          <ul>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          Web Development
          <ul>
            <li>
              Frontend
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </li>

            <li>
              Backend
              <ul>
                <li>Python</li>
                <li>MySQL</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
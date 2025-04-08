const proficiencies = [
    "HTML5",
    "CSS3 / Bootstrap",
    "JavaScript / ES6+",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL / Sequelize",
    "Git / GitHub",
    "REST APIs",
    "GraphQL",
    "Responsive Design",
    "Python",
    "Cypress",
  ];
  
  const Resume = () => {
    return (
      <section className="py-4">
        <div className="container">
          <h2 className="mb-4 text-center">Resume</h2>
  
          {/* Download Link */}
          <div className="text-center mb-4">
            <a
              href="/resume.pdf" // make sure this file is in your public folder
              download
              className="btn btn-success"
            >
              Download Resume
            </a>
          </div>
  
          {/* Proficiency List */}
          <div className="row">
            {proficiencies.map((skill, idx) => (
              <div className="col-md-6 mb-2" key={idx}>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Resume;
  
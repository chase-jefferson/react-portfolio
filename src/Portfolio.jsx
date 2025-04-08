const projects = [
    {
      title: "Weather Dashboard API",
      image: "/images/Weather_Dashboard_Screenshot.png",
      deployedUrl: "https://weather-dashboard-api-2zsw.onrender.com",
      githubUrl: "https://github.com/chase-jefferson/weather-dashboard",
    },
    {
      title: "Book Search Engine",
      image: "/images/Book_Search_Engine.png",
      deployedUrl: "https://book-search-engine-npz0.onrender.com",
      githubUrl: "https://github.com/chase-jefferson/book-search-engine",
    },
    {
      title: "Project Three",
      image: "https://via.placeholder.com/300x200",
      deployedUrl: "https://your-deployed-app.com",
      githubUrl: "https://github.com/yourusername/project-three",
    },
    {
      title: "Project Four",
      image: "https://via.placeholder.com/300x200",
      deployedUrl: "https://your-deployed-app.com",
      githubUrl: "https://github.com/yourusername/project-four",
    },
    {
      title: "Project Five",
      image: "https://via.placeholder.com/300x200",
      deployedUrl: "https://your-deployed-app.com",
      githubUrl: "https://github.com/yourusername/project-five",
    },
    {
      title: "Project Six",
      image: "https://via.placeholder.com/300x200",
      deployedUrl: "https://your-deployed-app.com",
      githubUrl: "https://github.com/yourusername/project-six",
    },
  ];
  
  const Portfolio = () => {
    return (
      <section className="py-4">
        <div className="container">
          <h2 className="mb-4 text-center">Portfolio</h2>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={`${project.title} screenshot`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <div className="mt-auto">
                      <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm me-2"
                      >
                        View App
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;
  
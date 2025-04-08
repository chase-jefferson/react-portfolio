const AboutMe = () => {
    return (
      <section className="py-4">
        <div className="container">
          <h2 className="mb-4 text-center">About Me</h2>
          <div className="row align-items-center">
            {/* Avatar */}
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <img
                src="/images/Professional_Headshot.jpeg"
                alt="Developer avatar"
                className="img-fluid rounded-circle border border-2"
              />
            </div>
  
            {/* Bio */}
            <div className="col-md-8">
              <p>
                Hi, I&#39;m Chase Jefferson, a passionate web developer with experience in building responsive, user-friendly applications using modern web technologies like React, Bootstrap, and more. I enjoy solving problems, learning new tools, and creating clean, maintainable code.
              </p>
              <p>
                I have a background in medical science, real estate, and fitness; and I&#39;m constantly exploring new ways to improve the user experience in any sector of the econonmy. When I&#39;m not coding, you&#39;ll find me in the gym, running around the National Mall, dancing, or playing in adult sports leagues.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
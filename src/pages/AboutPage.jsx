import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-left">

          <span className="tag">
            About SkillPath
          </span>

          <h1>
            Learn Today,
            <br />
            Lead Tomorrow.
          </h1>

          <p>
            SkillPath is a modern online learning platform built for students,
            professionals and developers who want to master future technologies.
            We provide industry-ready courses, hands-on projects, live mentoring,
            certificates and career guidance to help learners achieve success.
          </p>

          <button>
            Explore Courses
          </button>

        </div>

        <div className="about-right">

          <div className="box">
            <h2>500+</h2>
            <p>Premium Courses</p>
          </div>

          <div className="box">
            <h2>25K+</h2>
            <p>Students</p>
          </div>

          <div className="box">
            <h2>120+</h2>
            <p>Expert Mentors</p>
          </div>

          <div className="box">
            <h2>98%</h2>
            <p>Success Rate</p>
          </div>

        </div>

      </div>

      <div className="mission">

        <h2>Our Mission</h2>

        <p>
          Our mission is to provide affordable, high-quality education using
          modern technologies like Artificial Intelligence, Cloud Computing,
          Web Development, Cyber Security and Data Science.
        </p>

      </div>

    </section>
  );
}

export default AboutPage;

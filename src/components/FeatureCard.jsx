import "./FeatureCard.css";

const features = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Learn HTML, CSS, JavaScript, React and modern frontend technologies."
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "Master AI, Machine Learning and Deep Learning with real-world projects."
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    desc: "Explore AWS, Azure and Google Cloud with hands-on labs."
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    desc: "Protect systems with ethical hacking and security fundamentals."
  },
  {
    icon: "📱",
    title: "App Development",
    desc: "Build Android and cross-platform mobile applications."
  },
  {
    icon: "📊",
    title: "Data Science",
    desc: "Analyze data, build dashboards and create predictive models."
  }
];

function FeatureCard() {
  return (
    <section className="features">

      <h2 className="section-title">
        Explore Our Features
      </h2>

      <div className="feature-grid">

        {features.map((item, index) => (
          <div className="feature-card" key={index}>

            <div className="icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>
              Learn More →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeatureCard;

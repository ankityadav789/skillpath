import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    review:
      "SkillPath completely transformed my web development journey. The UI and learning experience are outstanding.",
    image: "👨💻",
  },
  {
    name: "Priya Singh",
    role: "AI Engineer",
    review:
      "The AI courses are practical and project-based. I landed my internship after completing them.",
    image: "👩💻",
  },
  {
    name: "Aman Verma",
    role: "Full Stack Developer",
    review:
      "Amazing mentors, premium content and beautiful learning platform. Highly recommended!",
    image: "🧑🚀",
  },
];

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2>What Our Students Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="avatar">{item.image}</div>

            <h3>{item.name}</h3>

            <span>{item.role}</span>

            <p>{item.review}</p>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;

import { Link } from "react-router-dom";
import "./CTABanner.css";

function CTABanner() {
  return (
    <section className="cta">

      <h2>Ready To Start Your Learning Journey?</h2>

      <p>
        Join thousands of learners and build your dream career today.
      </p>

      <Link to="/not-found">
        <button>
          Enroll Now
        </button>
      </Link>

    </section>
  );
}

export default CTABanner;

import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <section className="notfound">

      <div className="notfound-card">

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <button>⬅ Back To Home</button>
        </Link>

      </div>

    </section>
  );
}

export default NotFoundPage;

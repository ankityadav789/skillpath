import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <section className="notfound">

        <div className="notfound-card">

          <h1>404</h1>

          <h2>404 - Page Not Found</h2>

          <p>
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link to="/" className="back-btn">Go Back Home</Link>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default NotFoundPage;

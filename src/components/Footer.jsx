import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){

return(

<footer className="footer">

<h2>SkillPath</h2>

<p>
Build Skills • Learn Faster • Grow Career
</p>

<div className="footer-links">

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/contact">Contact</Link>

</div>

<p className="copy">

© 2026 SkillPath. All Rights Reserved.

</p>

</footer>

);

}

export default Footer;

import { Link } from "react-router-dom";
import "../App.css";

export default function List() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <strong>Day 19/20</strong>{" "}
        </li>
        <li className="nav-item">
          <Link to="/FormYupNew" className="nav-links">
            FormYup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Feedback" className="nav-links">
            Feedback
          </Link>
          </li>
        <li className="nav-item">
          <Link to="/YupForms" className="nav-links">
            YupForms(log in)
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/FeedbackForm" className="nav-links">
            FeedbackForm
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Signup" className="nav-links">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/GenderProfile" className="nav-links">
            GenderProfile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ProductData" className="nav-links">
            ProductData
          </Link>
        </li>
      </ul>
    </div>
  );
}

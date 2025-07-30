import { Link } from "react-router-dom";
import '../App.css'
export default  function List () {
    return(
        <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <strong>Day 21</strong>{" "}
        </li>
         <li className="nav-item">
          <Link to="/Address" className="nav-links">
            Address
          </Link>
        </li>
         <li className="nav-item">
          <Link to="/UploadInput" className="nav-links">
            UploadInput
          </Link>
        </li>
         <li className="nav-item">
          <Link to="/Tags" className="nav-links">
            Tags
          </Link>
        </li>
         <li className="nav-item">
          <Link to="/DateValidation" className="nav-links">
            DateValidation
          </Link>
        </li>
         <li className="nav-item">
          <Link to="/ConditionalValidation" className="nav-links">
            ConditionalValidation
          </Link>
        </li>
      </ul>
    </div>
    )
}
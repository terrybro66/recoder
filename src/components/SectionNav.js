import React from "react";
import { Link } from "react-router-dom";

const SectionNav = () => {
  return (
    <div className="container">
      <div className="chapter">
        <Link to="/react">
          <i class="fab fa-react"></i>
        </Link>
      </div>
      <div className="chapter">
        <div>
          <Link to="/javascript">
            <i class="fab fa-js-square"></i>
          </Link>
        </div>
        <Link to="/one">
          <div>day one</div>
        </Link>
        <Link to="/two">
          <div>day two</div>
        </Link>
      </div>
      <div className="chapter">
        <Link to="/css">
          <i class="fab fa-css3-alt"></i>
        </Link>
      </div>
      <div className="chapter">
        <Link to="/clone">
          <i class="fas fa-clone"></i>
        </Link>
      </div>
      <div className="chapter">
        <Link to="/chart">
          <i class="fas fa-chart-area"></i>
        </Link>
      </div>
    </div>
  );
};

export default SectionNav;

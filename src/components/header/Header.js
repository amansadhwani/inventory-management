import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const { category } = useSelector((state) => state.category);
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Inventory Management
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/all-category" className="nav-link">
                  All
                </Link>
              </li>
              {category.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link to={item.id} className="nav-link">
                    {item.categoryName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

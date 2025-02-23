import React from "react";
import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleLogged } from "../../features/Slices";
import { RootState } from "../../features/store";

function Header() {
  const logged = useSelector((state: RootState) => state.slice.data);
  const loggedin = useSelector((state: RootState) => state.slice.auth);
  const dispatch = useDispatch();

  return (
    <header className="container-fluid bg-light shadow-sm py-2 d-flex align-items-center justify-content-between">
      {/* Logo */}
      <Link to="/">
        <img
          src="/Logo.png"
          alt="logo"
          className="img-fluid"
          style={{ width: "100px" }}
        />
      </Link>

      {/* Navigation Menu (Desktop) */}
      <nav className="d-none d-lg-flex gap-4">
        <Link className="text-dark fw-semibold text-decoration-none" to="/">
          Job Search
        </Link>
        <Link className="text-dark fw-semibold text-decoration-none" to="/">
          My Application
        </Link>
        <Link className="text-dark fw-semibold text-decoration-none" to="/">
          Companies
        </Link>
        <Link className="text-dark fw-semibold text-decoration-none" to="/">
          Contact Us
        </Link>
      </nav>

      {/* User Authentication Section */}
      {!loggedin ? (
        <div className="d-flex gap-3 align-items-center">
          <Link to="/sign-in" className="btn btn-primary fw-bold">
            Login
          </Link>
          <Link to="/sign-up" className="btn btn-outline-primary fw-bold">
            Sign Up
          </Link>
          <button className="btn btn-light d-lg-none">
            <Menu size={28} className="text-dark" />
          </button>
        </div>
      ) : (
        <div className="d-flex gap-3 align-items-center">
          <span className="fw-bold text-dark">{logged.firstName}</span>
          <button
            onClick={() => dispatch(toggleLogged(false))}
            className="btn btn-outline-danger fw-bold"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

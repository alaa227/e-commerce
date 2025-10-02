// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import cn from "classnames";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { currentUser, mockLoginAsDemo, logout } = useAuth();
  const { count } = useCart();

  return (
    <nav className={cn("navbar navbar-expand-lg", styles.navbar)}>
      <div className="container">
        {/* Logo */}
        <Link className={cn("navbar-brand", styles.brand)} to="/">
          <span className={styles.logoMark}>A</span>
          <span className={styles.brandText}>Alaa Jewelry</span>
        </Link>

        {/* Toggle for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                end
                className={({ isActive }) =>
                  cn("nav-link", { [styles.activeLink]: isActive })
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  cn("nav-link", { [styles.activeLink]: isActive })
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  cn("nav-link", { [styles.activeLink]: isActive })
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  cn("nav-link", { [styles.activeLink]: isActive })
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right side: login/register or user + cart */}
          <ul className="navbar-nav align-items-center">
            {!currentUser ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                {/* quick demo login for testing */}
                <li className="nav-item">
                  <button
                    className={cn("btn btn-link nav-link", styles.demoBtn)}
                    onClick={mockLoginAsDemo}
                  >
                    Demo Login
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-3">
                  <span className={styles.welcome}>
                    مرحباً، {currentUser.name}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className={cn("btn btn-link nav-link", styles.logout)}
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            <li className="nav-item position-relative ms-2">
              <NavLink className="nav-link" to="/cart">
                <span className="me-1">🛒</span>
                <span className={styles.cartText}>Cart</span>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ background: "var(--color-accent)", color: "#fff" }}
                >
                  {count}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

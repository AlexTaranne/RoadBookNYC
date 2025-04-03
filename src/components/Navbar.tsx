import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const links = [
    {
      name: "Jour 1",
      path: "/day1",
    },
    {
      name: "Jour 2",
      path: "/day2",
    },
    {
      name: "Jour 3",
      path: "/day3",
    },
    {
      name: "Jour 4",
      path: "/day4",
    },

    {
      name: "Jour 5",
      path: "/day5",
    },
    {
      name: "Jour 6",
      path: "/day6",
    },
    {
      name: "Jour 7",
      path: "/day7",
    },
    {
      name: "Jour 8",
      path: "/day8",
    },
    {
      name: "Jour 9",
      path: "/day9",
    },
    {
      name: "Jour 10",
      path: "/day10",
    },
  ];

  return (
    <nav>
      <div className="title">
        <Link to="/" onClick={closeMenu}>
          <h1 className="navbar-logo">NYC</h1>
        </Link>
      </div>
      <section>
        <div className="menu-icon" onClick={toggleMenu} onKeyDown={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.path} onClick={closeMenu}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}

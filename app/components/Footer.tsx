"use client";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link href="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

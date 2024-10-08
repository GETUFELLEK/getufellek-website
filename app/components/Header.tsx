import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <Link
            href="/"
            className="hover:text-teal-300 transition-colors duration-300"
          >
            Getu Tadesse Fellek
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/publications"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-teal-300 transition-colors duration-300"
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;



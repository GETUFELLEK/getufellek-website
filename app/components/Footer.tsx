// "use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Branding or Links */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          © {new Date().getFullYear()} Getu Tadesse Fellek
        </div>

        {/* Footer Navigation Links */}
        <nav>
          <ul className="flex flex-wrap justify-center space-x-6 text-lg">
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
    </footer>
  );
};

export default Footer;

// import React from "react";
// import Link from "next/link";

// const Footer: React.FC = () => {
//   return (
//     <footer className="footer bg-gray-900 text-white py-4">
//       <nav className="container mx-auto">
//         <ul className="flex justify-center space-x-6">
//           <li>
//             <Link href="/">
//               <a className="hover:text-teal-300 transition-colors duration-300">
//                 Home
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/projects">
//               <a className="hover:text-teal-300 transition-colors duration-300">
//                 Projects
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/skills">
//               <a className="hover:text-teal-300 transition-colors duration-300">
//                 Skills
//               </a>
//             </Link>
//           </li>
//           <li>
//             {/* Ensure the correct path, depending on your folder structure */}
//             <Link href="/contacts">
//               <a className="hover:text-teal-300 transition-colors duration-300">
//                 Contact
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </footer>
//   );
// };

// export default Footer;

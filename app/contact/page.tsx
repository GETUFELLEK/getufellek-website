"use client";
import React from "react";

const contacts: React.FC = () => {
  return (
    <section className="contacts-section bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Contact Me</h2>
        <div className="text-center">
          <p className="text-lg mb-4">
            Email:{" "}
            <a
              href="mailto:getnettadesse2133@gmail.com"
              className="text-teal-400 underline hover:text-teal-300"
            >
              getnettadesse2133@gmail.com
            </a>
          </p>
          <p className="text-lg mb-4">
            GitHub:{" "}
            <a
              href="https://github.com/GETUFELLEK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 underline hover:text-teal-300"
            >
              GETUFELLEK
            </a>
          </p>
          <p className="text-lg mb-4">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/getu-tadesse-fellek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 underline hover:text-teal-300"
            >
              Getu Tadesse Fellek
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default contacts;

// "use client";
// import React from "react";

// const contacts: React.FC = () => {
//   return (
//     <section className="contacts-section bg-gray-900 text-white py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-5xl font-bold text-center mb-12">contacts Me</h2>
//         <div className="text-center">
//           <p className="text-lg mb-4">
//             Email:{" "}
//             <a
//               href="mailto:getnettadesse2133@gmail.com"
//               className="text-teal-400 underline hover:text-teal-300"
//             >
//               getnettadesse2133@gmail.com
//             </a>
//           </p>
//           <p className="text-lg mb-4">
//             GitHub:{" "}
//             <a
//               href="https://github.com/GETUFELLEK"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-teal-400 underline hover:text-teal-300"
//             >
//               GETUFELLEK
//             </a>
//           </p>
//           <p className="text-lg mb-4">
//             LinkedIn:{" "}
//             <a
//               href="https://www.linkedin.com/in/getu-tadesse-fellek"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-teal-400 underline hover:text-teal-300"
//             >
//               Getu Tadesse Fellek
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contacts;

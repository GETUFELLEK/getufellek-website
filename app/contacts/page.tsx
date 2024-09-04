import React from "react";

const Contacts: React.FC = () => {
  return (
    <section className="contacts-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          Email:{" "}
          <a href="mailto:getnettadesse2133@gmail.com">
            getnettadesse2133@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/GETUFELLEK"
            target="_blank"
            rel="noopener noreferrer"
          >
            GETUFELLEK
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/getu-tadesse-fellek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Getu Tadesse Fellek
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contacts;

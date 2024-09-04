import React from "react";

const publications = [
  {
    title:
      "G-DGANet: Gated Deep Graph Attention Network with Reinforcement Learning for Solving Traveling Salesman Problem",
    authors:
      "Getu Fellek, Ahmed Farid, Shigeru Fujimura, Osamu Yoshie, Goytom Gebreyesus",
    journal: "Neurocomputing, 579, 127392",
    year: 2024,
    link: "https://doi.org/10.1016/j.neucom.2024.127392",
  },
  {
    title:
      "Deep Graph Representation Learning to Solve Vehicle Routing Problem",
    authors:
      "Getu Fellek, Ahmed Farid, Goytom Gebreyesus, Shigeru Fujimura, Osamu Yoshie",
    conference:
      "2023 IEEE 22nd International Conference on Machine Learning and Cybernetics (ICMLC), Australia, Adelaide",
    link: "https://ieeexplore.ieee.org/document/10327970",
  },
  {
    title:
      "Graph Transformer with Reinforcement Learning for Vehicle Routing Problem",
    authors:
      "Getu Fellek, Ahmed Farid, Goytom Gebreyesus, Shigeru Fujimura, Osamu Yoshie",
    journal:
      "IEEJ Transactions on Electrical and Electronic Engineering, 18(5), 701-713",
    year: 2023,
    link: "https://doi.org/10.1002/tee.23326",
  },
  {
    title:
      "Edge Encoded Attention Mechanism to Solve Capacitated Vehicle Routing Problem with Reinforcement Learning",
    authors: "G. Fellek, G. Gebreyesus, A. Farid, S. Fujimura, O. Yoshie",
    conference:
      "IEEE International Conference on Industrial Engineering and Engineering Management (IEEM), Kuala Lumpur, Malaysia",
    year: 2022,
    link: "https://doi.org/10.1109/IEEM.2022.1234567",
  },
  {
    title:
      "Gated Attention Model with Reinforcement Learning for Solving Dynamic Job Shop Scheduling Problem",
    authors:
      "Goytom Gebreyesus, Getu Fellek, Ahmed Farid, Shigeru Fujimura, Osamu Yoshie",
    year: 2023,
  },
];

const PublicationsPage: React.FC = () => {
  return (
    <section className="bg-gray-900 min-h-screen text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">
          My Publications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-4">{pub.title}</h2>
              <p className="text-lg mb-2">
                <span className="font-semibold">Authors: </span>
                {pub.authors}
              </p>
              {pub.journal && (
                <p className="text-lg mb-2">
                  <span className="font-semibold">Journal: </span>
                  {pub.journal}
                </p>
              )}
              {pub.conference && (
                <p className="text-lg mb-2">
                  <span className="font-semibold">Conference: </span>
                  {pub.conference}
                </p>
              )}
              <p className="text-lg mb-2">
                <span className="font-semibold">Year: </span>
                {pub.year}
              </p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 underline hover:text-teal-300"
                >
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;

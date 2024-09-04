"use client";
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white-900 text-white min-h-screen">
      {/* About Me Section */}
      {/* <section className="about-section bg-pink-700 text-center py-20"> */}
      {/* <section className="about-section bg-purple-500 text-center py-20"> */}
      <section className="about-section bg-gray-500 text-center py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/profile.png"
              alt="Getu Tadesse Fellek"
              className="rounded-full w-48 h-56 md:w-72 md:h-72 mb-10 shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-left px-4">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Hi, I'm Getu Tadesse Fellek, a passionate AI Engineer and software
              developer with a strong focus on building innovative solutions
              that solve real-world problems. I hold a PhD in Information
              Systems, with a research focus on deep learning and reinforcement
              learning (DRL).
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Currently, I work as an AI Engineer at Reazon Holdings, Inc, where
              I contribute to developing and deploying machine learning models
              that enhance our products' capabilities.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              I’m also passionate about continuous learning and staying updated
              with the latest advancements in AI and machine learning.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy talking to friends and families,
              reading books and watching movies which helps me stay creative and
              energized.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="links-section bg-white-900 text-center py-20">
        <h2 className="text-4xl font-bold mb-10">Explore My Work</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/skills">
            <div className="bg-yellow-700 p-8 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-semibold mb-4">Skills</h3>
              <p className="text-lg">
                Discover my technical expertise and proficiency in programming,
                machine learning, and more.
              </p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="bg-green-700 p-8 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-semibold mb-4">Projects</h3>
              <p className="text-lg">
                Explore the innovative projects I've worked on, from robotics to
                machine learning and beyond.
              </p>
            </div>
          </Link>

          <Link href="/publications">
            <div className="bg-purple-700 p-8 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-semibold mb-4">Publications</h3>
              <p className="text-lg">
                Check out my academic contributions in deep learning, graph
                optimization, and more.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contacts-section bg-teal-900 text-center py-20">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <div className="container mx-auto px-4">
          <p className="text-lg">Feel free to reach out!</p>
          <p className="text-lg mt-4">
            <a
              href="mailto:getnettadesse2133@gmail.com"
              className="underline text-teal-400"
            >
              getnettadesse2133@gmail.com
            </a>
          </p>
          <p className="text-lg mt-4">
            <a
              href="https://github.com/GETUFELLEK"
              target="_blank"
              className="underline text-teal-400"
            >
              GitHub: GETUFELLEK
            </a>
          </p>
          <p className="text-lg mt-4">
            <a
              href="https://www.linkedin.com/in/getu-tadesse-fellek"
              target="_blank"
              className="underline text-teal-400"
            >
              LinkedIn: Getu Tadesse Fellek
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

// import React, { useState } from "react";

// const HomePage: React.FC = () => {
//   const [showPublications, setShowPublications] = useState(false);
//   const [showSkills, setShowSkills] = useState({
//     programming: false,
//     ml: false,
//     mlops: false,
//     cloud: false,
//     data: false,
//     devops: false,
//     tools: false,
//     viz: false,
//     collaboration: false,
//     methodologies: false,
//     frontend: false,
//     backend: false,
//   });

//   const toggleSkills = (category: keyof typeof showSkills) => {
//     setShowSkills((prevState) => ({
//       ...prevState,
//       [category]: !prevState[category],
//     }));
//   };

//   const togglePublications = () => {
//     setShowPublications((prev) => !prev);
//   };

//   return (
//     <div className="bg-gray-900 text-white">
//       {/* About Me Section */}
//       <section className="about-section bg-gray-800 text-center py-20">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           <img
//             src="/profile.jpg"
//             alt="Getu Tadesse Fellek"
//             className="rounded-full w-48 h-48 mx-auto md:mx-0 mb-4 shadow-lg"
//           />
//           <div className="text-left px-4">
//             <h2 className="text-4xl font-bold mb-6">About Me</h2>
//             <p className="text-lg mb-4 leading-relaxed">
//               Hi, I'm Getu Tadesse Fellek, a passionate AI Engineer and software
//               developer with a strong focus on building innovative solutions
//               that solve real-world problems. I hold a PhD in Information
//               Systems, with a research focus on deep learning and reinforcement
//               learning (DRL). My journey into AI began with a deep curiosity
//               about how machines can learn and adapt, leading me to work on
//               several exciting projects that integrate AI into existing
//               products.
//             </p>
//             <p className="text-lg mb-4 leading-relaxed">
//               Currently, I work as an AI Engineer at [Your Company Name], where
//               I contribute to developing and deploying machine learning models
//               that enhance our products' capabilities. My expertise lies in
//               designing and implementing complex algorithms, optimizing model
//               performance, and ensuring scalable deployment in production
//               environments.
//             </p>
//             <p className="text-lg mb-4 leading-relaxed">
//               I’m also passionate about continuous learning and staying updated
//               with the latest advancements in AI and machine learning. I’m
//               always exploring new techniques, attending conferences, and
//               contributing to the open-source community.
//             </p>
//             <p className="text-lg leading-relaxed">
//               When I'm not coding, I enjoy [Your Hobbies or Interests], which
//               helps me stay creative and energized.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="projects-section bg-blue-900 text-center py-20">
//         <h2 className="text-4xl font-bold mb-6">Projects</h2>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
//           <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Project Title 1</h3>
//             <p className="text-lg">Project description...</p>
//           </div>
//           <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Project Title 2</h3>
//             <p className="text-lg">Project description...</p>
//           </div>
//           <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Project Title 3</h3>
//             <p className="text-lg">Project description...</p>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="skills-section bg-white text-center py-20">
//         <h2 className="text-4xl font-bold mb-6 text-gray-900">Skills</h2>
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//           {/* Programming Languages */}
//           <div
//             className="bg-gray-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("programming")}
//           >
//             <h3 className="text-xl font-semibold">Programming Languages</h3>
//             {showSkills.programming && (
//               <p className="text-sm mt-2 text-gray-800">Python, C++</p>
//             )}
//           </div>

//           {/* Machine Learning & Deep Learning */}
//           <div
//             className="bg-green-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("ml")}
//           >
//             <h3 className="text-xl font-semibold">
//               Machine Learning & Deep Learning
//             </h3>
//             {showSkills.ml && (
//               <p className="text-sm mt-2 text-gray-800">
//                 Logistic Regression, SVM, Random Forest, Gradient Boosting,
//                 Reinforcement Learning, CNN, GNN, LSTM, GRU, Transformer, GAN,
//                 Autoencoders
//               </p>
//             )}
//           </div>

//           {/* MLOps & LLOps */}
//           <div
//             className="bg-yellow-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("mlops")}
//           >
//             <h3 className="text-xl font-semibold">MLOps & LLOps</h3>
//             {showSkills.mlops && (
//               <p className="text-sm mt-2 text-gray-800">
//                 CI/CD (Jenkins, GitLab CI), Model Deployment (TensorFlow
//                 Serving, TorchServe), Monitoring & Logging (Prometheus,
//                 Grafana), Model Versioning (DVC, MLflow)
//               </p>
//             )}
//           </div>

//           {/* Cloud Platforms */}
//           <div
//             className="bg-blue-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("cloud")}
//           >
//             <h3 className="text-xl font-semibold">Cloud Platforms</h3>
//             {showSkills.cloud && (
//               <p className="text-sm mt-2 text-gray-800">
//                 AWS (SageMaker, Lambda, EC2, S3), GCP (AI Platform, BigQuery,
//                 Cloud Functions), Azure (ML Studio, Kubernetes Service)
//               </p>
//             )}
//           </div>

//           {/* Data Engineering */}
//           <div
//             className="bg-orange-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("data")}
//           >
//             <h3 className="text-xl font-semibold">Data Engineering</h3>
//             {showSkills.data && (
//               <p className="text-sm mt-2 text-gray-800">
//                 Apache Spark, Hadoop, ETL Processes, Data Pipelines, Kafka
//               </p>
//             )}
//           </div>

//           {/* DevOps */}
//           <div
//             className="bg-red-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("devops")}
//           >
//             <h3 className="text-xl font-semibold">DevOps</h3>
//             {showSkills.devops && (
//               <p className="text-sm mt-2 text-gray-800">
//                 Docker, Kubernetes, Jenkins, Terraform, Ansible
//               </p>
//             )}
//           </div>

//           {/* Development Tools */}
//           <div
//             className="bg-teal-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("tools")}
//           >
//             <h3 className="text-xl font-semibold">Development Tools</h3>
//             {showSkills.tools && (
//               <p className="text-sm mt-2 text-gray-800">
//                 Pycharm, Visual Studio Code, Jupyter Notebook, R Studio
//               </p>
//             )}
//           </div>

//           {/* Data Visualization */}
//           <div
//             className="bg-purple-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("viz")}
//           >
//             <h3 className="text-xl font-semibold">Data Visualization</h3>
//             {showSkills.viz && (
//               <p className="text-sm mt-2 text-gray-800">
//                 Matplotlib, Seaborn, Plotly, Power BI, Tableau
//               </p>
//             )}
//           </div>

//           {/* Collaboration Tools */}
//           <div
//             className="bg-pink-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("collaboration")}
//           >
//             <h3 className="text-xl font-semibold">Collaboration Tools</h3>
//             {showSkills.collaboration && (
//               <p className="text-sm mt-2 text-gray-800">
//                 Jira, Confluence, Slack
//               </p>
//             )}
//           </div>

//           {/* Methodologies */}
//           <div
//             className="bg-gray-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("methodologies")}
//           >
//             <h3 className="text-xl font-semibold">Methodologies</h3>
//             {showSkills.methodologies && (
//               <p className="text-sm mt-2 text-gray-800">Agile, Scrum, DevOps</p>
//             )}
//           </div>

//           {/* Frontend Development */}
//           <div
//             className="bg-indigo-200 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("frontend")}
//           >
//             <h3 className="text-xl font-semibold">Frontend Development</h3>
//             {showSkills.frontend && (
//               <p className="text-sm mt-2 text-gray-800">
//                 React, Next.js, HTML5, CSS3, JavaScript, Tailwind CSS
//               </p>
//             )}
//           </div>

//           {/* Backend Development */}
//           <div
//             className="bg-indigo-300 py-3 px-4 rounded-lg shadow-lg cursor-pointer"
//             onClick={() => toggleSkills("backend")}
//           >
//             <h3 className="text-xl font-semibold">Backend Development</h3>
//             {showSkills.backend && (
//               <p className="text-sm mt-2 text-gray-800">
//                 Node.js, Express.js, REST APIs, GraphQL, MongoDB, SQL
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Publications Section */}
//       <section className="publications-section bg-green-900 text-center py-20">
//         <h2
//           className="text-4xl font-bold mb-6 cursor-pointer"
//           onClick={togglePublications}
//         >
//           {showPublications ? "Hide Publications" : "View Publications"}
//         </h2>
//         {showPublications && (
//           <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
//             <div className="bg-green-700 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4">
//                 G-DGANet: Gated Deep Graph Attention Network with Reinforcement
//                 Learning for Solving Traveling Salesman Problem.
//               </h3>
//               <p className="text-lg">
//                 Getu Fellek, Ahmed Farid, Shigeru Fujimura, Osamu Yoshie, Goytom
//                 Gebreyesus. (2024). Neurocomputing, 579, 127392.
//               </p>
//               <a
//                 href="https://doi.org/10.1016/j.neucom.2024.127392"
//                 target="_blank"
//                 className="text-green-300 underline"
//               >
//                 DOI
//               </a>
//             </div>
//             <div className="bg-green-700 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Deep Graph Representation Learning to Solve Vehicle Routing
//                 Problem.
//               </h3>
//               <p className="text-lg">
//                 Getu Fellek, Ahmed Farid, Goytom Gebreyesus, Shigeru Fujimura, &
//                 Osamu Yoshie. (2023). 2023 IEEE 22nd International Conference on
//                 Machine Learning and Cybernetics (ICMLC) Australia, Adelaide.
//                 Status: Accepted for presentation.
//               </p>
//             </div>
//             <div className="bg-green-700 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Graph Transformer with Reinforcement Learning for Vehicle
//                 Routing Problem.
//               </h3>
//               <p className="text-lg">
//                 Getu Fellek, Ahmed Farid, Goytom Gebreyesus, Shigeru Fujimura, &
//                 Osamu Yoshie. (2023). IEEJ Transactions on Electrical and
//                 Electronic Engineering, 18(5), 701-713.
//               </p>
//               <a
//                 href="https://doi.org/10.1002/tee.23326"
//                 target="_blank"
//                 className="text-green-300 underline"
//               >
//                 DOI
//               </a>
//             </div>
//             <div className="bg-green-700 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Edge Encoded Attention Mechanism to Solve Capacitated Vehicle
//                 Routing Problem with Reinforcement Learning.
//               </h3>
//               <p className="text-lg">
//                 G. Fellek, G. Gebreyesus, A. Farid, S. Fujimura, and O. Yoshie.
//                 (2022). IEEE International Conference on Industrial Engineering
//                 and Engineering Management (IEEM), Kuala Lumpur, Malaysia, pp.
//                 576-582.
//               </p>
//               <a
//                 href="https://doi.org/10.1109/IEEM.2022.1234567"
//                 target="_blank"
//                 className="text-green-300 underline"
//               >
//                 DOI
//               </a>
//             </div>
//             <div className="bg-green-700 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Gated Attention Model with Reinforcement Learning for Solving
//                 Dynamic Job Shop Scheduling Problem.
//               </h3>
//               <p className="text-lg">
//                 Goytom Gebreyesus, Getu Fellek, Ahmed Farid, Shigeru Fujimura, &
//                 Osamu Yoshie. (2023).
//               </p>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Contact Section */}
//       <section className="contacts-section bg-teal-900 text-center py-20">
//         <h2 className="text-4xl font-bold mb-6">Contact</h2>
//         <div className="container mx-auto px-4">
//           <p className="text-lg">Feel free to reach out!</p>
//           <p className="text-lg mt-4">
//             <a
//               href="mailto:getnettadesse2133@gmail.com"
//               className="underline text-teal-400"
//             >
//               getnettadesse2133@gmail.com
//             </a>
//           </p>
//           <p className="text-lg mt-4">
//             <a
//               href="https://github.com/GETUFELLEK"
//               target="_blank"
//               className="underline text-teal-400"
//             >
//               GitHub: GETUFELLEK
//             </a>
//           </p>
//           <p className="text-lg mt-4">
//             <a
//               href="https://www.linkedin.com/in/getu-tadesse-fellek"
//               target="_blank"
//               className="underline text-teal-400"
//             >
//               LinkedIn: Getu Tadesse Fellek
//             </a>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

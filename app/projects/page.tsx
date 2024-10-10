"use client";
import React from "react";

type Project = {
  title: string;
  description: string;
  link?: string; // Optional link property
};

type ProjectCategory = {
  category: string;
  items: Project[];
};

const Projects: React.FC = () => {
  const projects: ProjectCategory[] = [
    {
      category: "Graph-Based Optimization",
      items: [
        {
          title: "Deep Graph Representation Learning",
          link: "https://github.com/GETUFELLEK/Deep-graph-representation-learning-to-solve-combinatorial-optimization-problems",
          description:
            "Explored graph representation learning to solve combinatorial optimization problems.",
        },
        {
          title: "Edge Embedded Graph Transformer",
          link: "https://github.com/GETUFELLEK/Edge-embedded-graph-transformer",
          description:
            "Worked on an edge-embedded graph transformer for optimization tasks.",
        },
      ],
    },
    {
      category: "Speech Recognition",
      items: [
        {
          title: "Multimodal Speech Recognition System",
          link: "https://github.com/GETUFELLEK/multimodal-speech-recognition-with-lip-reading",
          description:
            "Developed and deployed a multimodal speech recognition system using TensorFlow Serving, enhancing real-time processing capabilities.",
        },
      ],
    },
    {
      category: "Cloud-Native Solutions",
      items: [
        {
          title: "Cloud-Native ML Solutions for Traffic Flow Prediction",
          link: "https://github.com/GETUFELLEK/Cloud-Native-ML-Solutions-for-Traffic-Flow-Prediction",
          description:
            "Developed and deployed cloud-native ML solutions for traffic flow prediction and anomaly detection, leveraging AWS and GCP services to ensure scalability and robustness.",
        },

      ],
    },
    {
      category: "graph-based AI model to predict relationships between drugs and diseases",
      items: [
        {
          title: "GNN based drug-disease interaction prediction",
          link: "https://github.com/GETUFELLEK/GNN-based-drug-disease-prediction",
          description:
            "This project demonstrates how to use Graph Neural Networks (GNNs) to predict drug-disease interactions. By leveraging publicly available datasets such as DrugBank and build a graph-based AI model to predict relationships between drugs and diseases, such as which drug treats or causes a disease..",
        },
      ],
    },
    {
      category: "Robotics & Control Systems",
      items: [
        {
          title: "ReazonChops Robot Arm - Daydreamer Model",
          description:
            "Working on the reproduction of the Daydreamer model using the ReazonChops robot arm, achieving improvements in task execution efficiency.",
        },
      ],
    },
    {
      category: "Computer Vision",
      items: [
        {
          title: "3D Object Detection for Anomaly Detection in Food Processing",
          description:
            "Led a project focused on 3D object detection, reducing defect rates by 20% through enhanced detection accuracy.",
        },
      ],
    },
    {
      category: "NLP & Computer Vision (Coming Soon)",
      items: [
        {
          title: "Upcoming Projects",
          description:
            "Additional projects in NLP and Computer Vision will be added here soon.",
        },
      ],
    },
  ];

  return (
    <section className="projects-section bg-blue-500 text-center py-20">
      <h2 className="text-4xl font-bold mb-12 text-white">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {projects.map((projectCategory, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-blue-500">
              {projectCategory.category}
            </h3>
            {projectCategory.items.map((project, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-lg mb-4">{project.description}</p>
                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

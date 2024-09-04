import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      details: "Python, C++",
      bgColor: "bg-gray-200",
    },
    {
      category: "Machine Learning & Deep Learning",
      details:
        "Logistic Regression, SVM, Random Forest, Gradient Boosting, Reinforcement Learning, CNN, GNN, LSTM, GRU, Transformer, GAN, Autoencoders",
      bgColor: "bg-green-200",
    },
    {
      category: "MLOps & LLOps",
      details:
        "CI/CD (Jenkins, GitLab CI), Model Deployment (TensorFlow Serving, TorchServe), Monitoring & Logging (Prometheus, Grafana), Model Versioning (DVC, MLflow)",
      bgColor: "bg-yellow-200",
    },
    {
      category: "Cloud Platforms",
      details:
        "AWS (SageMaker, Lambda, EC2, S3), GCP (AI Platform, BigQuery, Cloud Functions), Azure (ML Studio, Kubernetes Service)",
      bgColor: "bg-blue-200",
    },
    {
      category: "Data Engineering",
      details: "Apache Spark, Hadoop, ETL Processes, Data Pipelines, Kafka",
      bgColor: "bg-orange-200",
    },
    {
      category: "DevOps",
      details: "Docker, Kubernetes, Jenkins, Terraform, Ansible",
      bgColor: "bg-red-200",
    },
    {
      category: "Development Tools",
      details: "Pycharm, Visual Studio Code, Jupyter Notebook, R Studio",
      bgColor: "bg-teal-200",
    },
    {
      category: "Data Visualization",
      details: "Matplotlib, Seaborn, Plotly, Power BI, Tableau",
      bgColor: "bg-purple-200",
    },
    {
      category: "Collaboration Tools",
      details: "Jira, Confluence, Slack",
      bgColor: "bg-pink-200",
    },
    {
      category: "Methodologies",
      details: "Agile, Scrum, DevOps",
      bgColor: "bg-gray-200",
    },
    {
      category: "Frontend Development",
      details: "React, Next.js, HTML5, CSS3, JavaScript, Tailwind CSS",
      bgColor: "bg-indigo-200",
    },
    {
      category: "Backend Development",
      details: "Node.js, Express.js, REST APIs, GraphQL, MongoDB, SQL",
      bgColor: "bg-indigo-300",
    },
  ];

  return (
    <section className="skills-section bg-white text-center py-20">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">My Skills</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${skill.bgColor}`}
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <p className="text-sm text-gray-800">{skill.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

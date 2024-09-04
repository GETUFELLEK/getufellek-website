import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* About Me Section */}
      <section className="about-section bg-purple-600 text-center py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/2">
            {/* Using Next.js Image instead of img */}
            <Image
              src="/profile.png"
              alt="Getu Tadesse Fellek"
              width={256}
              height={256}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 mb-6 shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-left px-4">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Hi, I&apos;m Getu Tadesse Fellek, a passionate AI Engineer and
              software developer with a strong focus on building innovative
              solutions that solve real-world problems. I hold a PhD in
              Information Systems, with a research focus on deep learning and
              reinforcement learning (DRL).
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Currently, I work as an AI Engineer at [Your Company Name], where
              I contribute to developing and deploying machine learning models
              that enhance our products&apos; capabilities.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              I&apos;m also passionate about continuous learning and staying
              updated with the latest advancements in AI and machine learning.
            </p>
            <p className="text-lg leading-relaxed">
              When I&apos;m not coding, I enjoy [Your Hobbies or Interests],
              which helps me stay creative and energized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

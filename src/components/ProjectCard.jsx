
const portfolio = [
  {
    title: "Swiggy Clone",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Redux-Toolkit"],
    border: "border-green-400",
    img: "/swiggy-img.png",
    link: "",
  },
  {
    title: "Netflix Clone",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Redux-Toolkit"],
    border: "border-blue-400",
    img: "/Screenshot 2025-05-23 184853.png",
    link: "https://netflix-jjw2gbpkb-dev-rohits-projects.vercel.app/",
  },
  {
    title: "ApplyBoard",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Redux-Toolkit"],
    border: "border-purple-400",
    img: "/applyboard-img.png",
    link: "",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0f172a] py-16 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute top-1/2 left-0 transform -translate-y-1/2"></div>
          <h2 className="relative z-10 inline-block bg-[#1e293b] px-6 py-2 text-xl font-semibold text-purple-300 shadow-md rounded-md">
            Projects
          </h2>
        </div>

        {/* Flex container with wrap */}
        <div className="flex flex-wrap gap-6 justify-center">
          {portfolio.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-xl bg-[#1e293b] overflow-hidden shadow-lg border-t-4 ${project.border} flex-shrink-0`}
              style={{ width: 'calc(50% - 1.5rem)' }} 
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-3">
                <p className="text-sm text-green-400 mb-1">1 month ago</p>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-[#2dd4bf]/20 text-[#2dd4bf] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

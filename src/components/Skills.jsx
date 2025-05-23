import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
];


export default function Skills() {
  return (
    <div className="bg-[#0f172a] px-4 py-8 text-white flex flex-col items-center">
      
      {/* Title Section */}
      <div className="text-center mb-12 relative w-full max-w-7xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute top-1/2 left-0 transform -translate-y-1/2"></div>
        <h2 className="relative z-10 inline-block bg-[#1e293b] px-6 py-2 text-xl font-semibold text-purple-300 shadow-md rounded-md">
          Skills
        </h2>
      </div>

      <div className="flex flex-wrap gap-8 justify-center max-w-7xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl shadow-md flex flex-col items-center justify-center 
                       py-4 px-12 hover:scale-105 transition-transform w-36 h-36"
          >
            {skill.icon}
            <p className="mt-2 text-gray-300 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

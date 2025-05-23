import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import './Education.css';


const educationData = [
  {
    duration: '2023 - Present',
    title: 'BACHELOR DEGREE',
    institution: 'Allahabad State University',
  },
  {
    duration: '2019 - 2021',
    title: 'HIGHER SECONDARY SCHOOL',
    institution: 'Vishnu Bhagwan Public School',
  },
  // {
  //   duration: '2008 - 2018',
  //   title: 'SECONDARY SCHOOL',
  //   institution: 'Vishnu Bhagwan Public School',
  // },
];

export default function EducationSection() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      
      {/* Title Section */}
      <div className="text-center mb-12 relative w-full">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute top-1/2 left-0 transform -translate-y-1/2"></div>
        <h2 className="relative z-10 inline-block bg-[#1e293b] px-6 py-2 text-xl font-semibold text-purple-300 shadow-md rounded-md">
          Education
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="education-card p-6 rounded-2xl shadow-lg flex items-center gap-6 hover:scale-[1.02] transition-transform bg-[#1e293b]"
          >
            <div className="text-sky-400 text-3xl">
              <FaUserGraduate />
            </div>
            <div>
              <p className="text-teal-400 font-semibold mb-1">{edu.duration}</p>
              <h3 className="text-xl font-bold text-white">{edu.title}</h3>
              <p className="text-gray-400">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

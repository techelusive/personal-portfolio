import React from 'react';

export default function AboutMe() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen text-white px-14 pt-16 pb-12">
      
      {/* Title Section  */}
      <div className="text-center mb-12 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent absolute top-1/2 left-0 transform -translate-y-1/2"></div>
        <h2 className="relative z-10 inline-block bg-[#1e293b] px-6 py-2 text-xl font-semibold text-purple-300 shadow-md rounded-md">
          ABOUT ME
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Section - Text */}
        <div>
          <h2 className="text-green-400 text-xl font-semibold mb-4">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            My name is <span className="font-bold text-sky-400">ROHIT SINGH</span>. I am a passionate Full-Stack Developer skilled in 
            <span className="text-sky-400 font-semibold"> React.js</span>, 
            <span className="text-sky-400 font-semibold"> Node.js</span>, and  <span className="text-red-400 font-semibold">modern web technologies.</span> I’ve built real-world projects like a 
            <span className="text-teal-400 font-semibold"> Swiggy Clone</span>, 
            <span className="text-teal-400 font-semibold"> Netflix-GPT</span>, and an 
            <span className="text-teal-400 font-semibold"> ApplyBoard-inspired platform</span>, showcasing my ability to build scalable, user-friendly applications.
          <br /><br />
        Beyond development, I’m deeply passionate about 
            <span className="text-red-400 font-semibold"> cybersecurity</span> and 
            <span className="text-red-400 font-semibold"> ethical hacking</span>, with a strong desire to pursue a career and conduct research in this field➖ultimately aiming to join elite teams like 
            <span className="text-yellow-400 font-bold"> Google’s Project Zero</span>. I actively sharpen my skills through 
            <span className="text-sky-400 font-semibold"> DSA </span>
            and continuous learning.
          </p>

        </div>

        {/* Right Section - Image and Label */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/rohit-alias.jpg" 
            alt="Rohit Singh"
            className="rounded-lg w-80 h-auto object-cover"
          />
        </div>
        
      </div>
    </div>
  );
}


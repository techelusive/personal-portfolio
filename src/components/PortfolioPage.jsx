import React from 'react';
import Header from './Header';
import { HiOutlineDownload, HiOutlineUser } from 'react-icons/hi';
import SocialLinks from './SocialLinks';

export default function PortfolioPage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen font-sans">
      <Header />

      <main className="px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="text-left pl-4 lg:pl-12">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              Hello,<br />
              This is <span className="text-pink-400">ROHIT SINGH</span>, I'm a <br />
              Student <span className="text-green-400">Learning Fullstack Development</span>.
            </h1>
            <SocialLinks />

            <div className="mt-8 flex gap-4">
              <button 
              onClick={() => window.location.href = 'mailto:iknowrohit19@gmail.com'}
              className="flex items-center cursor-pointer gap-2 border border-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500"
              >  
                CONTACT ME <HiOutlineUser />
              </button>
              <button className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-full">
                GET RESUME <HiOutlineDownload />
              </button>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-[#0f172a] border border-[#334155] rounded-xl p-6 text-sm font-mono shadow-lg">
              <p><span className="text-pink-400">const</span> coder = {'{'} </p>
              <p>&nbsp;&nbsp;name: <span className="text-yellow-400">'rohit singh'</span>,</p>
              <p>&nbsp;&nbsp;skills: [<span className="text-yellow-400">'React', 'Redux', 'Javascript', 'Typescript', 'TailwindCSS'</span>],</p>
              <p>&nbsp;&nbsp;hardWorker: <span className="text-orange-400">true</span>,</p>
              <p>&nbsp;&nbsp;quickLearner: <span className="text-orange-400">true</span>,</p>
              <p>&nbsp;&nbsp;problemSolver: <span className="text-orange-400">true</span>,</p>
              <p>&nbsp;&nbsp;hireable: <span className="text-green-400">function</span>() {'{'} </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">return</span> (</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.hardWorker &amp;&amp;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.problemSolver &amp;&amp;</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills.length &gt;= 5</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;);</p>
              <p>&nbsp;&nbsp;{'}'}</p>
              <p>{'}'};</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

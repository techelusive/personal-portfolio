// // components/SocialLinks.jsx
// import React from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// const socialLinks = [
//   {
//     href: 'https://github.com/techelusive',
//     icon: FaGithub,
//     label: 'GitHub Profile',
//   },
//   {
//     href: 'https://www.linkedin.com/in/rohitsingh1912/',
//     icon: FaLinkedin,
//     label: 'LinkedIn Profile',
//   },
// ];

// const SocialLinks = () => (
//   <div className="flex gap-4 mt-8 text-pink-400 text-2xl">
//     {socialLinks.map(({ href, icon: Icon, label }) => (
//       <a
//         key={href}
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={label}
//         className="hover:text-pink-300 transition-colors"
//       >
//         <Icon />
//       </a>
//     ))}
//   </div>
// );

// export default SocialLinks;




// components/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://github.com/techelusive',
    icon: <FaGithub className="text-blue-800 text-4xl" />,
    label: 'GitHub Profile',
  },
  {
    href: 'https://www.linkedin.com/in/rohitsingh1912/',
    icon: <FaLinkedin className="text-blue-600 text-4xl" />,
    label: 'LinkedIn Profile',
  },
];
const SocialLinks = () => (
  <div className="flex gap-4 mt-8 text-pink-400 text-2xl">
    {socialLinks.map(({ href, icon, label }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="hover:text-pink-300 transition-colors"
      >
        {icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;

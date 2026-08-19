// const Navbar = () => {
//   return (
//     <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
//       <div className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg">

//         {/* Logo */}
//         <a
//           href="#home"
//           className="text-2xl font-bold tracking-wide text-white"
//         >
//           Khushi<span className="text-purple-500">.</span>
//         </a>

//         <div className="hidden md:flex items-center gap-8">
//           <a
//             href="#home"
//             className="text-sm text-gray-300 hover:text-purple-400 transition duration-300"
//           >
//             Home
//           </a>

//           <a
//             href="#about"
//             className="text-sm text-gray-300 hover:text-purple-400 transition duration-300"
//           >
//             About
//           </a>

//           <a
//             href="#skills"
//             className="text-sm text-gray-300 hover:text-purple-400 transition duration-300"
//           >
//             Skills
//           </a>

//           <a
//             href="#projects"
//             className="text-sm text-gray-300 hover:text-purple-400 transition duration-300"
//           >
//             Projects
//           </a>

//           <a
//             href="#contact"
//             className="text-sm text-gray-300 hover:text-purple-400 transition duration-300"
//           >
//             Contact
//           </a>
//         </div>

//         {/* Resume Button */}
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hidden md:block px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition duration-300"
//         >
//           Resume
//         </a>

//         <button className="md:hidden text-white text-2xl">
//           ☰
//         </button>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl"
    >
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-purple-400 transition duration-300"
        >
          Khushi<span className="text-purple-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-500 transition duration-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

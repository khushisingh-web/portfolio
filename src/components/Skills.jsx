import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-lg font-medium mb-3">
            What I Know
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to create modern,
            responsive and interactive web experiences.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="skills-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* HTML */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-orange-400 text-3xl font-bold mb-5">
              HTML
            </div>

            <h3 className="text-xl font-semibold mb-2">
              HTML
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Structure and semantics for modern web pages.
            </p>
          </div>

          {/* CSS */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-blue-400 text-3xl font-bold mb-5">
              CSS
            </div>

            <h3 className="text-xl font-semibold mb-2">
              CSS
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Responsive layouts and modern visual styling.
            </p>
          </div>

          {/* JavaScript */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-yellow-400 text-3xl font-bold mb-5">
              JS
            </div>

            <h3 className="text-xl font-semibold mb-2">
              JavaScript
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Interactive functionality and application logic.
            </p>
          </div>

          {/* React */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-cyan-400 text-3xl font-bold mb-5">
              React
            </div>

            <h3 className="text-xl font-semibold mb-2">
              React.js
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Component-based interfaces and dynamic web applications.
            </p>
          </div>

          {/* Tailwind */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-sky-400 text-3xl font-bold mb-5">
              TW
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Tailwind CSS
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Utility-first styling for fast responsive UI development.
            </p>
          </div>

          {/* Redux */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-purple-400 text-3xl font-bold mb-5">
              RTK
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Redux Toolkit
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Managing global application state efficiently.
            </p>
          </div>

          {/* Git */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-red-400 text-3xl font-bold mb-5">
              Git
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Git & GitHub
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Version control and project collaboration.
            </p>
          </div>

          {/* GSAP */}
          <div className="skill-card p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 hover:border-purple-500/50 transition duration-300">
            <div className="text-green-400 text-3xl font-bold mb-5">
              GSAP
            </div>

            <h3 className="text-xl font-semibold mb-2">
              GSAP
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Creating smooth and interactive web animations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
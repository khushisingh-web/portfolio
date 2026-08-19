import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        {
          x: -80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-card",
        {
          x: 80,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="about-section min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div className="about-content">

          <p className="text-purple-400 text-lg font-medium mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-5">
            I'm a BCA student and aspiring Frontend Developer who loves
            creating modern, responsive and interactive web experiences.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I enjoy working with React, JavaScript and modern UI
            technologies. I'm continuously learning new technologies
            and improving my development skills by building real-world
            projects.
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition duration-300"
          >
            Let's Connect
          </a>

        </div>

        {/* Right Side */}
        <div className="about-card grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              BCA
            </h3>
            <p className="text-gray-400">
              Computer Applications Student
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              Frontend
            </h3>
            <p className="text-gray-400">
              React & JavaScript Developer
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              Projects
            </h3>
            <p className="text-gray-400">
              Building Real-World Projects
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-bold text-purple-400 mb-2">
              Learning
            </h3>
            <p className="text-gray-400">
              Always Learning & Improving
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
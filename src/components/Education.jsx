import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".education-card",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={educationRef}
      id="education"
      className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-24 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-lg font-medium mb-3">
            My Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My educational background and the knowledge I've gained
            throughout my learning journey.
          </p>
        </div>

        {/* Education Card */}
        <div className="education-card max-w-3xl mx-auto p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5">

          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>
              <p className="text-purple-400 font-medium mb-2">
                Bachelor's Degree
              </p>

              <h3 className="text-2xl md:text-3xl font-bold">
                Bachelor of Computer Applications
              </h3>
            </div>

            <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm w-fit">
              BCA
            </span>

          </div>

          {/* College */}
          <p className="text-gray-300 text-lg mb-3">
            Bhagwan Mahavir University
          </p>

          {/* Duration */}
          <p className="text-gray-500 mb-6">
            2024 – 2027
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6">
            During my BCA journey, I developed an interest in web
            development and started learning technologies such as
            HTML, CSS, JavaScript, React and other modern web
            development tools.
          </p>

          {/* Learning */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-300 text-sm">
              Web Development
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-300 text-sm">
              JavaScript
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-300 text-sm">
              React.js
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 text-gray-300 text-sm">
              Programming
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
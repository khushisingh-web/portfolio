import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Project cards animation
      gsap.fromTo(
        ".project-card",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-container",
            start: "top 80%",
            once: true,
          },
        },
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-lg font-medium mb-3">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects I've built while learning and improving my
            development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="project-card rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src="/images/SkyMart.png"
                alt="SkyMart"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">SkyMart</h3>

              <p className="text-gray-400 leading-relaxed mb-4">
                A modern e-commerce website built with React, Tailwind CSS and
                API integration.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  React
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  Tailwind
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  API
                </span>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://sky-mart-dusky-iota.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/khushisingh-web/SkyMart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 hover:border-purple-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="h-52 overflow-hidden">
              <img
                src="/images/todolist.png"
                alt="Redux Toolkit Todo App"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Redux Toolkit Todo App
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4">
                A Todo application built using React and Redux Toolkit for
                managing application state.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  React
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  Redux
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  Vite
                </span>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://redux-toolkit-todo-app-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="px-4 py-2 rounded-lg border border-white/20 hover:border-purple-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}

          <div className="project-card rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="h-52 overflow-hidden">
              <img
                src="/images/dashboard.png"
                alt="Interview Practice Tracker Dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Interview Practice Tracker
              </h3>

              <p className="text-gray-400 leading-relaxed mb-4">
                A dashboard to organize interview questions, track preparation
                progress, and manage technical practice.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  React
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  Tailwind CSS
                </span>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                  JavaScript
                </span>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://interview-practice-tracker-beta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/khushisingh-web/interview-practice-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 hover:border-purple-500 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

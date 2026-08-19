import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        ".hero-image",
        {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen bg-[#0a0a0a] text-white flex items-center px-6 md:px-16 pt-32"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <p className="text-purple-400 text-lg md:text-xl font-medium mb-4">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Khushi Singh
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6">
            Frontend Developer
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            I’m a passionate web developer who loves creating modern, responsive
            and interactive web experiences using React, JavaScript and modern
            web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition duration-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 font-medium hover:bg-purple-600 hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image flex justify-center md:translate-x-16">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500/50 p-2">
            <img
              src="/images/profile.jpeg"
              alt="Khushi Singh"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

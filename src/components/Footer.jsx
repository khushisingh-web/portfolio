import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 90%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-section bg-gradient-to-b from-[#151515] to-[#080808] text-white border-t border-white/10"
    >
      <div className="footer-content max-w-7xl mx-auto px-6 md:px-16 py-14">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Logo / About */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-block text-3xl font-bold text-white hover:text-purple-400 transition duration-300"
            >
              Khushi<span className="text-purple-500">.</span>
            </a>

            <p className="text-gray-400 mt-3">
              Frontend Developer
            </p>

            <p className="text-gray-500 text-sm mt-2 max-w-xs">
              Building modern, responsive and interactive web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">

              <a
                href="#home"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                Projects
              </a>

              <a
                href="#education"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                Education
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-purple-400 transition duration-300"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex justify-center md:justify-end gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/khushisingh-web"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition duration-300"
              >
                GH
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/khushi-singh-9321b3424/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-sm font-medium text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition duration-300"
              >
                IN
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">

          <p className="text-gray-500">
            © 2026 Khushi Singh. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with{" "}
            <span className="text-purple-400">React</span>
            {" & "}
            <span className="text-purple-400">GSAP</span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".contact-heading", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".contact-left",
          {
            x: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".contact-right",
          {
            x: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="contact-section min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="contact-heading text-center mb-16">
          <p className="text-purple-400 text-lg font-medium mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            Have a project idea, collaboration opportunity, or simply want to
            say hello? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
              <p className="text-purple-400 font-medium mb-3">Contact Me</p>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Let's Work Together
              </h3>

              <p className="text-gray-400 leading-relaxed mb-10">
                I'm currently focused on improving my development skills,
                building projects and exploring new opportunities. If you have
                an idea or would like to connect, feel free to reach out.
              </p>

              {/* Email */}
              <div className="mb-7">
                <p className="text-gray-500 text-sm mb-2">Email</p>

                <a
                  href="mailto:your-email@gmail.com"
                  className="text-gray-200 hover:text-purple-400 transition duration-300 break-all"
                >
                  khushisingh832048@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div className="mb-7">
                <p className="text-gray-500 text-sm mb-2">GitHub</p>

                <a
                  href="https://github.com/khushisingh-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-purple-400 transition duration-300"
                >
                  github.com/khushisingh-web
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-gray-500 text-sm mb-2">LinkedIn</p>

                <a
                  href="#"
                  className="text-gray-200 hover:text-purple-400 transition duration-300"
                >
                  https://www.linkedin.com/in/khushi-singh-9321b3424/
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-7">Send Me a Message</h3>

              {/* Name */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition duration-300"
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition duration-300"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

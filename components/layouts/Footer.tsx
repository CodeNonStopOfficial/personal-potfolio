export function Footer() {
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Projects", href: "#" },
      { name: "Contact", href: "#" },
    ],

    services: [
      { name: "Web Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Frontend Development", href: "#" },
      { name: "Backend Development", href: "#" },
    ],

    socialLinks: [
      {
        name: "GitHub",
        href: "https://github.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.08 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        ),
      },

      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94v5.66H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
          </svg>
        ),
      },

      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 002.16-2.72 9.84 9.84 0 01-3.13 1.2 4.92 4.92 0 00-8.39 4.48A13.97 13.97 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.87 4.87 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.82 4.93 4.93 0 01-2.22.08 4.92 4.92 0 004.6 3.41A9.87 9.87 0 010 19.54a13.94 13.94 0 007.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63A10 10 0 0024 4.56z" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Virendra
              <span className="text-blue-500">.</span>
            </h2>

            <p className="mt-5 text-zinc-400 leading-relaxed text-sm">
              Passionate Full Stack Developer building modern, responsive and
              high-performance web applications using Next.js and modern
              technologies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {footerLinks.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    rounded-full
                    border border-zinc-700
                    bg-zinc-900
                    flex items-center justify-center
                    text-zinc-300
                    hover:bg-blue-500
                    hover:border-blue-500
                    hover:text-white
                    transition-all duration-300
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-5 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="
                      text-zinc-400
                      hover:text-blue-400
                      transition duration-300
                    "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-5 text-white">
                Services
              </h3>

              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="
                      text-zinc-400
                      hover:text-blue-400
                      transition duration-300
                    "
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white">
              Newsletter
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Subscribe to receive latest updates, blogs, and development tips.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  px-4 py-3
                  rounded-xl
                  bg-zinc-900
                  border border-zinc-700
                  text-sm
                  text-white
                  placeholder:text-zinc-500
                  focus:outline-none
                  focus:border-blue-500
                  transition
                "
              />

              <button
                type="submit"
                className="
                  px-5 py-3
                  rounded-xl
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  font-medium
                  transition duration-300
                "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 mt-4 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500 text-center md:text-left">
              © 2026 Virendra Kumar Prajapati. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-zinc-500 hover:text-blue-400 transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-zinc-500 hover:text-blue-400 transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

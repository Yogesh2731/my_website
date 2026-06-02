import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Yogesh2731",
    icon: <FaGithub className="text-lg" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yogesh-surwade-623493387/",
    icon: <FaLinkedin className="text-lg" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yogeshh.s/",
    icon: <FaInstagram className="text-lg" />,
  },
  {
    label: "Email",
    href: "mailto:surwadeyogesh1998@gmail.com",
    icon: <FaEnvelope className="text-lg" />,
  },
]

const NAV_LINKS = [
  { label: "Home",       href: "/"           },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "About",      href: "#about"      },
  { label: "Contact",    href: "#contact"    },
  { label: "Resume",     href: "/Resume"     },
]

const Footer = () => {
  return (
    <footer className="bg-(--color-bg) border-t border-(--color-border) w-full">

      {/* Main footer content */}
      <div className="w-full px-4 sm:px-8 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h3 className="text-(--color-text-primary) text-xl font-bold">Yogesh Surwade</h3>
          <p className="text-(--color-text-secondary) text-sm leading-relaxed max-w-xs">
            Full Stack Developer building fast, scalable web applications with clean design and powerful backend logic.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-1">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-(--color-border) flex items-center justify-center text-(--color-text-secondary) hover:text-(--color-accent) hover:border-(--color-accent) transition-colors duration-200 no-underline!"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-(--color-text-primary) text-sm font-semibold uppercase tracking-widest">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-(--color-text-secondary) text-sm hover:text-(--color-accent)! transition-colors duration-200 no-underline!"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-(--color-text-primary) text-sm font-semibold uppercase tracking-widest">Get In Touch</h4>
          <div className="flex flex-col gap-2 text-(--color-text-secondary) text-sm">
            <span>Mumbai, Maharashtra, India</span>
            <Link
              href="mailto:surwadeyogesh1998@gmail.com"
              className="hover:text-(--color-accent)! transition-colors duration-200 no-underline! text-(--color-text-secondary)"
            >
              surwadeyogesh1998@gmail.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/yogesh-surwade-623493387/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-accent)! transition-colors duration-200 no-underline! text-(--color-text-secondary)"
            >
              linkedin.com/in/yogesh-surwade
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-(--color-accent) w-full min-h-12 py-3 px-6 sm:px-10 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-1 text-neutral-100 text-xs sm:text-sm">
        <span>© {new Date().getFullYear()} Yogesh Surwade. All rights reserved.</span>
        <span className="opacity-75">Built with Next.js & Tailwind CSS</span>
      </div>
    </footer>
  )
}

export default Footer

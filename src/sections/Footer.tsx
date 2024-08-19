"use client";

import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import { useScroll } from "@/contexts/ScrollContext";

export const Footer = () => {
  const { scrollTo } = useScroll();

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="h6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col lg:flex-row lg:gap-7 gap-5 lg:flex-1">
            <a
              onClick={() => scrollTo("hero")}
              className="text-white/70 hover:text-white text-xs md:text-sm transition cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollTo("features")}
              className="text-white/70 hover:text-white text-xs md:text-sm transition cursor-pointer"
            >
              Features
            </a>
            <a
              onClick={() => scrollTo("testimonials")}
              className="text-white/70 hover:text-white text-xs md:text-sm transition cursor-pointer"
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollTo("contact")}
              className="text-white/70 hover:text-white text-xs md:text-sm transition cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-5 lg:flex-1">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

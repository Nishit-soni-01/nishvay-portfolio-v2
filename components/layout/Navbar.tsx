
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Beyond Code", href: "/beyond-code" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("Home");

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMenu();

    if (href === "/" && pathname === "/") {
      event.preventDefault();

      document.querySelector(".ryen-snap-container")?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.substring(2);

      if (pathname === "/") {
        event.preventDefault();

        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", href);
      }
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      const currentPage = navLinks.find(
        (link) => link.href === pathname
      );

      setActiveLink(currentPage?.name || "");
      return;
    }

    const container = document.querySelector(
      ".ryen-snap-container"
    ) as HTMLElement | null;

    if (!container) return;

    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
    ];

    const updateActiveLink = () => {
      const marker =
        container.getBoundingClientRect().top +
        container.clientHeight * 0.4;

      let currentSection = "home";
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom >= marker) {
          currentSection = id;
          closestDistance = 0;
        } else if (closestDistance !== 0) {
          const distance = Math.min(
            Math.abs(rect.top - marker),
            Math.abs(rect.bottom - marker)
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            currentSection = id;
          }
        }
      });

      const activeItem = navLinks.find(
        (link) =>
          link.href ===
          (currentSection === "home"
            ? "/"
            : `/#${currentSection}`)
      );

      if (activeItem) {
        setActiveLink(activeItem.name);
      }
    };

    updateActiveLink();

    container.addEventListener("scroll", updateActiveLink, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveLink);

    return () => {
      container.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, [pathname]);

  return (
    <>
      {/* Top Navigation */}
      <header className="ryen-topbar fixed inset-x-0 top-0 z-[60]">
        <div className="ryen-topbar-inner">

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            className="ryen-menu-trigger"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Nishit - Home"
            className="ryen-brand"
          >
            <span>NS</span>
          </Link>

          {/* Right Actions */}
          <div className="ryen-topbar-actions">

            <a
              href="/resume.pdf"
              download="Nishit-Soni-Resume.pdf"
              className="ryen-resume-nav-button"
            >
              <Download size={17} />
              <span>Resume</span>
            </a>

            <Link
              href="/#contact"
              onClick={(event) => handleNavClick(event, "/#contact")}
              className="ryen-talk-button"
            >
              Let's Talk
              <ArrowUpRight size={19} strokeWidth={1.7} />
            </Link>

          </div>
        </div>
      </header>

      {/* Overlay */}
      <button
        type="button"
        aria-label="Close navigation overlay"
        onClick={closeMenu}
        tabIndex={menuOpen ? 0 : -1}
        className={`fixed inset-0 z-[70] bg-black/65 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Navigation Panel */}
      <aside
        id="side-navigation"
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        className={`ryen-nav-panel fixed inset-y-0 left-0 z-[80] flex w-full max-w-[760px] flex-col overflow-y-auto bg-[#99e836] text-black transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] md:w-[52vw] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex h-24 shrink-0 items-center justify-between px-8 md:px-16">
          <span className="text-sm font-black tracking-[0.2em]">
            NS.
          </span>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation"
            tabIndex={menuOpen ? 0 : -1}
            className="grid size-12 place-items-center rounded-full transition-transform duration-300 hover:rotate-90"
          >
            <X size={36} strokeWidth={1.4} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-1 flex-col justify-center px-10 pb-12 pl-[20%] md:px-20 md:pl-[25%]">

          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              tabIndex={menuOpen ? 0 : -1}
              style={{
                transitionDelay: menuOpen
                  ? `${index * 65}ms`
                  : "0ms",
              }}
              className={`group flex w-fit items-center gap-4 py-3 text-3xl font-normal tracking-tight transition-all duration-500 hover:translate-x-3 md:py-4 md:text-5xl ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              } ${
                activeLink === link.name
                  ? "text-black"
                  : "text-black/55 hover:text-black"
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  activeLink === link.name
                    ? "text-black"
                    : "text-black/40"
                }`}
              >
                0{index + 1}
              </span>

              {link.name}

              <ArrowUpRight
                size={22}
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Link>
          ))}

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="Nishit-Soni-Resume.pdf"
            tabIndex={menuOpen ? 0 : -1}
            style={{
              transitionDelay: menuOpen
                ? `${navLinks.length * 65}ms`
                : "0ms",
            }}
            className={`ryen-menu-resume group mt-7 flex w-fit items-center gap-4 border-t border-black/25 pt-6 text-lg font-bold tracking-wide transition-all duration-500 hover:translate-x-3 md:text-2xl ${
              menuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <Download size={21} />
            DOWNLOAD RESUME
            <ArrowUpRight
              size={21}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </nav>

        {/* Bottom Detail */}
        <div className="flex shrink-0 items-center justify-between border-t border-black/20 px-8 py-6 text-xs font-bold uppercase tracking-widest md:px-16">
          <span>Let's create something meaningful.</span>
          <span>© Nishit</span>
        </div>
      </aside>
    </>
  );
}

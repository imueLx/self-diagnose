"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon, FiMenu, FiX, FiActivity } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Load theme preference from localStorage
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Handle theme toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Assessment", path: "/checker" },
    { name: "Quiz", path: "/quiz" },
    { name: "CRAAP", path: "/craap" },
    { name: "Guide", path: "/guide" },
    { name: "Risks", path: "/risks" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white">
            <FiActivity size={20} />
          </span>
          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            EduHealth
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                pathname === path
                  ? "bg-teal-600 text-white"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            href="/checker"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Start Assessment
          </Link>
          <button
            onClick={toggleDarkMode}
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          Menu
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden border-t border-slate-200/70 bg-white/95 transition-[max-height] duration-300 dark:border-slate-800/70 dark:bg-slate-950/95 ${
          isMenuOpen ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-5">
          <div className="grid gap-3">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                className={`w-full rounded-2xl px-4 py-3 text-base font-medium transition ${
                  pathname === path
                    ? "bg-teal-600 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
          <Link
            href="/checker"
            className="mt-4 flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Start Assessment
          </Link>
          <button
            onClick={toggleDarkMode}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

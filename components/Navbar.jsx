"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
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
    { name: "Checker", path: "/checker" },
    { name: "Guide", path: "/guide" },
    { name: "Risks", path: "/risks" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="relative flex justify-between items-center p-4 bg-blue-100 dark:bg-gray-900 shadow-md">
      <Link
        href="/"
        className="text-2xl font-bold text-blue-700 dark:text-blue-400"
      >
        EduHealth
      </Link>

      {/* Hamburger Menu Icon (Only for Small Screens) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 z-50 absolute top-4 right-6"
        aria-label="Toggle Menu"
      >
        <FiMenu size={28} className="text-blue-700 dark:text-blue-400" />
      </button>

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 w-4/5 bg-white dark:bg-gray-900 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 md:static md:w-auto md:flex md:gap-6 md:items-center md:translate-x-0 md:bg-transparent md:shadow-none`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-6 p-2 text-blue-700 dark:text-blue-400 md:hidden"
          aria-label="Close Menu"
        >
          <FiX size={28} />
        </button>

        {/* Navigation Links & Dark Mode Toggle for Mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto gap-4 p-6 md:p-0">
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`w-full text-center py-3 px-4 rounded-lg text-lg md:text-base font-medium ${
                pathname === path
                  ? "bg-blue-500 text-white dark:bg-blue-400"
                  : "text-gray-800 dark:text-gray-300 hover:bg-blue-200 dark:hover:bg-gray-700"
              } transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          {/* Dark Mode Toggle for Mobile (Inside Menu) */}
          <button
            onClick={toggleDarkMode}
            className="md:hidden p-3 mt-4 text-blue-700 dark:text-blue-400 border rounded-lg w-full"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <span className="flex items-center justify-center gap-2">
                <FiSun size={24} /> Light Mode
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <FiMoon size={24} /> Dark Mode
              </span>
            )}
          </button>
        </div>
      </div>
      {/* Dark Mode Toggle for Large Screens */}
      <div className="hidden md:flex gap-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-2 text-blue-700 dark:text-blue-400"
        >
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </div>
    </nav>
  );
}

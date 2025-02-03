"use client";
import { useEffect, useState, useRef } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <nav className="relative flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900 shadow-md">
      <Link href="/" className="text-xl font-bold dark:text-white">
        EduHealth
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 z-50"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Navigation Links */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 w-4/5 bg-gray-200 dark:bg-gray-900 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:static md:w-auto md:flex md:gap-6 md:items-center md:translate-x-0 md:bg-transparent md:shadow-none`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto gap-4 p-6 md:p-0">
          {["checker", "guide", "risks", "resources", "about"].map((path) => (
            <Link
              key={path}
              href={`/${path}`}
              className="w-full text-center py-3 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-lg md:text-base font-medium dark:text-white border-b md:border-b-0 border-gray-300 dark:border-gray-600 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          ))}

          {/* Dark Mode Toggle for Small Screens */}
          <button
            onClick={toggleDarkMode}
            className="md:hidden p-2 mt-4"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </div>
      </div>

      {/* Dark Mode Toggle for Large Screens */}
      <div className="hidden md:flex gap-4">
        <button onClick={toggleDarkMode} className="p-2">
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </div>
    </nav>
  );
}

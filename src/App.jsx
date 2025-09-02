import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  // true => dark (forest), false => light (lemonade)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", dark ? "forest" : "lemonade");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function handleThemeToggle() {
    setDark((prev) => !prev);
  }

  function tabClass({ isActive }) {
    return isActive
      ? "tab tab-lg tab-active ![--tab-border-color:oklch(var(--p))]"
      : "tab tab-lg ![--tab-border-color:oklch(var(--p))]";
  }

  const tabs = [
    { to: "/", label: "Home", end: true },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About me" },
    // { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-contentver transition-colors duration-200 oflow-x-clip">
      {/* ===================== NAVBAR ===================== */}
      <header className="bg-base-100 border-b border-base-200 shadow-sm">
        <div className="navbar w-full px-2 sm:px-4 min-h-20 md:min-h-24 lg:max-w-6xl lg:mx-auto 2xl:max-w-none 2xl:mx-0">
          {/* Left: brand */}
          <div className="navbar-start min-w-0">
            <NavLink
              to="/"
              className="btn btn-ghost text-2xl md:text-3xl px-2 md:px-3"
            >
              Yaniel Gonzalez
            </NavLink>
          </div>

          {/* Center left empty so right side packs to the end */}
          <div className="navbar-center flex-1 min-w-0 justify-center"></div>

          {/* Right: desktop tabs + toggle, and a mobile dropdown */}
          <div className="navbar-end items-center gap-3 md:gap-4">
            {/* DESKTOP: tabs */}
            <div
              className="hidden lg:flex tabs tabs-box flex-wrap justify-end gap-2 lg:gap-3"
              role="tablist"
              aria-label="Main navigation"
            >
              {tabs.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  role="tab"
                  className={tabClass}
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* DESKTOP: theme toggle */}
            <label
              className="hidden lg:inline-grid swap swap-rotate"
              title="Toggle theme"
            >
              <input
                type="checkbox"
                aria-label="Toggle dark or light theme"
                checked={dark}
                onChange={handleThemeToggle}
              />
              {/* When checked (dark=true), show SUN (indicates tap to go light) */}
              <svg
                className="swap-on h-8 w-8 md:h-10 md:w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* When unchecked (dark=false), show MOON (indicates tap to go dark) */}
              <svg
                className="swap-off h-8 w-8 md:h-10 md:w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* MOBILE: hamburger dropdown (md:hidden) with tabs + toggle inside */}
            <div className="dropdown dropdown-end lg:hidden">
              <button
                aria-label="Open menu"
                className="btn btn-ghost btn-circle"
                tabIndex={0}
              >
                {/* hamburger icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <ul
                tabIndex={0}
                className="menu menu-md menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-3  max-w-[90vw] p-2 shadow text-left"
              >
                {tabs.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        (isActive ? "active " : "") + " px-6 whitespace-nowrap"
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}

                <li>
                  <hr className="my-1" />
                </li>

                {/* Compact theme icon */}
                <li className="flex justify-end">
                  <label className="swap swap-rotate p-0">
                    <input
                      type="checkbox"
                      aria-label="Toggle dark or light theme"
                      checked={dark}
                      onChange={handleThemeToggle}
                    />
                    {/* sun when dark=true (tap to go light) */}
                    <svg
                      className="swap-on h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    {/* moon when dark=false (tap to go dark) */}
                    <svg
                      className="swap-off h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </li>
              </ul>
            </div>
            {/* END mobile dropdown */}
          </div>
        </div>
      </header>

      {/* ===================== CONTENT ===================== */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Analytics/>
    </div>
  );
}

// src/pages/Home.jsx
import React, { useEffect } from 'react';
import headShot from '../assets/headShot.png';
import linkedInLogo from '../assets/LinkedIn_logo.png';
import githubLogo from '../assets/Github_logo.png';
import { NavLink } from 'react-router-dom';


export default function Home() {
  useEffect(() => { document.title = 'Home - Yaniel Gonzalez'; }, []);
  return (
    <section
      className="
        relative full-bleed
        mt-[-2rem] mb-[-2rem]
        min-h-[calc(100svh-81px)]
        md:min-h-[calc(100svh-97px)]
        overflow-y-clip
      "
      >
        {/* page split */}
        <div className="absolute inset-0 bg-base-100" />
        <div className="absolute inset-y-0 left-0 w-1/2 md:w-[48%] lg:w-[42%] xl:w-[38%] 2xl:w-[36%] bg-primary" />

        {/* ===== hero content area ===== */}
        <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-16">
    
        {/* ---------- SPLIT-COLOR CARD ---------- */}
        <div
          className="
            relative mx-auto
            w-[min(1040px,96vw)]           
            h-auto md:h-[560px] lg:h-[620px]  
            md:translate-x-2 lg:translate-x-4 xl:translate-x-6
            mt-6 md:mt-10 
          "
        >

          {/* the card */}
          <div className="relative w-full h-full rounded-2xl shadow-2xl bg-base-100 overflow-hidden">
            {/* split inside the card */}
            <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-primary" />
            <div className="md:hidden absolute inset-x-0 top-0 h-32 bg-primary" />

            {/* portrait + contact info centered in the LEFT half */}
            <div
              className="
                md:absolute md:left-0 md:top-0 md:h-full md:w-1/2
                flex flex-col items-center justify-center gap-3
                px-4 pt-10 md:p-0
              "
            >
              <figure className="relative w-36 h-36 md:w-60 md:h-72 lg:w-72 lg:h-80 rounded-full overflow-hidden bg-secondary">
                <img
                  src={headShot}
                  alt="Headshot"
                  className="h-full w-full object-cover object-center scale-110 md:scale-105 lg:scale-105"
                  loading="eager"
                />
              </figure>

              {/* contact text */}
              <div className=" text-center text-base-content">

                <h2 className="text-xl md:text-3xl font-bold tracking-tight ">Yaniel Gonzalez</h2>

                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <span className="badge badge-accent badge-sm md:badge-md">USF CS B.S.</span>
                  <span className="badge badge-accent badge-sm md:badge-md">Alumni</span>
                  <span className="badge badge-accent badge-sm md:badge-md">Open to SWE roles</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-base badge-outline badge-sm md:badge-md">Python</span>
                  <span className="badge badge-base badge-outline badge-sm md:badge-md">C++</span>
                  <span className="badge badge-base badge-outline badge-sm md:badge-md">C#</span>
                  <span className="badge badge-base badge-outline badge-sm md:badge-md">SQL</span>
                  <span className="badge badge-base badge-outline badge-sm md:badge-md">React</span>
                </div>

                <a href="mailto:yaniel1502@gmail.com" className="block mt-3 text-sm md:text-base hover:underline">
                  Email: yaniel1502@gmail.com
                </a>
                <a href="tel:+18134033999" className="block text-sm md:text-base hover:underline">
                  Phone: (813) 403-3999
                </a>
              </div>

              {/* social icons */}
              <div className="mt-2 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/yaniel-gonzalez/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <img src={linkedInLogo} alt="LinkedIn" className="h-7 w-7 md:h-8 md:w-8 object-contain transition-transform duration-200 hover:scale-110" />
                </a>
                <a
                  href="https://github.com/voxtrel"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <img src={githubLogo} alt="GitHub" className="h-7 w-7 md:h-8 md:w-8 object-contain transition-transform duration-200 hover:scale-110" />
                </a>
              </div>
            </div>

            {/* RIGHT half: title + description */}
            <div className="md:absolute md:right-0 md:top-0 md:h-full md:w-1/2 flex items-center">
              <div className="w-full px-4 sm:px-6 md:px-10 max-w-prose mt-6 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Welcome!</h2>                
                <p className="mt-3 text-sm md:text-lg leading-relaxed opacity-90">
                  I am Computer Science graduate from the University of South Florida. I am passionate about programming and software developement as a way to creating innovative solutions.
                </p>

                <p className="mt-3 text-sm md:text-lg leading-relaxed opacity-90">
                  Explore my site to get to know me and some of the projects I have worked on!
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <NavLink to="/projects" className="btn btn-primary shadow">Projects</NavLink>
                  <NavLink to="/about" className="btn btn-secondary shadow">About me</NavLink>
                  <a href="public/Yaniel_Gonzalez_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-accent">
                    Résumé
                  </a>
                </div>

                <div className='mt-4'></div>

              </div>
            </div>
          </div>
        </div>
        {/* ---------- /card ---------- */}
      </div>
    </section>
  );
}

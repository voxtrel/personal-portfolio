import { useEffect } from 'react';
import GradPic from '../assets/GradPic.jpg';
import { NavLink } from 'react-router-dom';

export default function About() {
    useEffect(() => { document.title = 'About Me - Yaniel Gonzalez'; }, []);

  return (
    <section className="max-w-5xl mx-auto w-full px-4 py-10 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold">About me</h1>

      <div className="mt-6 grid md:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* LEFT COLUMN: image */}
        <div className="md:col-span-5 space-y-6">
          <figure className="self-start">
            <img
              src={GradPic}
              alt="Yaniel at USF graduation"
              className="w-full max-h-[560px] object-cover rounded-2xl shadow-2xl ring-1 ring-base-300"
            />
            <figcaption className="mt-2 text-center text-sm text-base-content/60">
              USF Graduation
            </figcaption>
          </figure>
        </div>

        {/* RIGHT COLUMN: Who I am + Why CS stacked with tight spacing */}
        <div className="md:col-span-7 space-y-6">
          <div className="card bg-base-100 w-full shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Who I am</h2>
              <p>
                I'm Yaniel, a recent Computer Science graduate from the University of South Florida (GPA 3.95). Based in Tampa, FL, I'm open to 
                roles in software development, whether it is remote or from within driving distance, where I can contribute and keep growing.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Why Computer Science?</h2>
              <p>
                I am passionate about problem-solving, which is how I fell in love with Computer Science, as programming is my favorite medium to 
                create useful and innovative solutions that make an impact. I enjoy learning new tools and I'm comfortable working outside my comfort 
                zone when a project calls for it, which you might notice from some of my projects.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-full shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Toolbelt</h2>
              <div className="flex flex-wrap gap-2">
                {['React','C','C++','C#','SQL','Python','HTML', 'CSS', 'JavaScript', 'Git/GitHub', 'Ruby', 'Ruby on Rails', 'ASP.NET MVC'].map(tag => (
                  <span key={tag} className="badge badge-outline">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 space-y-6">
          {/* My Work Style (left, under the photo) */}
            <div className="card bg-base-100 w-full shadow-sm">
              <div className="card-body">
                <h2 className="card-title">My Work Style</h2>
                <p>
                  When it comes to my work style, I'm detail-oriented. I manage my time intentionally so I have room to polish and still meet deadlines.
                </p>
              </div>
            </div>

            {/* What is next? (left, under Work Style) */}
            <div className="card bg-base-100 w-full shadow-sm">
              <div className="card-body">
                <h2 className="card-title">What is next?</h2>
                <p>
                  I'm currently expanding out this portfolio and exploring opportunities in software engineering. Take a look around my projects, and feel free 
                  to get in touch.
                </p>
              </div>
            </div>
        </div>

    
        {/* CTA spanning full width */}
        <div className="md:col-span-12">
          <div className="flex flex-wrap gap-3">
            <NavLink to="/projects" className="btn btn-primary">View Projects</NavLink>
            {/* <NavLink to="/contact" className="btn btn-secondary">Contact</NavLink> */}
            <a href="/YANIEL_GONZALEZ_RESUME.pdf" className="btn btn-accent" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

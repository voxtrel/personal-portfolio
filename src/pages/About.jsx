import { useEffect } from "react";
import GradPic from "../assets/GradPic.jpg";

import { Heading, Button } from "../components/atoms";
import InfoCard from "../components/molecules/InfoCard";
import BadgeList from "../components/molecules/BadgeList";
import SectionHeader from "../components/molecules/SectionHeader";
import ImageSkeleton from "../components/molecules/ImageSkeleton";
import { NavLink } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "About Me - Yaniel Gonzalez";
  }, []);

  const toolbelt = [
    "React",
    "C",
    "C++",
    "C#",
    "SQL",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Git/GitHub",
    "Ruby",
    "Ruby on Rails",
    "ASP.NET MVC",
  ];

  return (
    <section className="max-w-5xl mx-auto w-full px-4 py-10 md:py-12">
      <SectionHeader title={"About me"} level={1} />

      <div className="mt-6 grid md:grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="md:col-span-5 space-y-6">
          <figure className="self-start">
            <ImageSkeleton
              src={GradPic}
              alt="Yaniel at USF graduation"
              containerClassName="w-full max-h-[560px] rounded-2xl shadow-2xl ring-1 ring-base-300"
              className="w-full max-h-[560px] object-cover rounded-2xl"
              skeletonClassName="rounded-2xl"
            />
            <figcaption className="mt-2 text-center text-sm text-base-content/60">
              USF Graduation
            </figcaption>
          </figure>
        </div>

        <div className="md:col-span-7 space-y-6">
          <InfoCard title="Who I am">
            <p>
              I'm Yaniel, a recent Computer Science graduate from the University
              of South Florida (GPA 3.95). Based in Tampa, FL, I'm open to roles
              in software development, whether it is remote or from within
              driving distance, where I can contribute and keep growing.
            </p>
          </InfoCard>

          <InfoCard title="Why Computer Science?">
            <p>
              I am passionate about problem-solving, which is how I fell in love
              with Computer Science, as programming is my favorite medium to
              create useful and innovative solutions that make an impact. I
              enjoy learning new tools and I'm comfortable working outside my
              comfort zone when a project calls for it, which you might notice
              from some of my projects.
            </p>
          </InfoCard>

          <InfoCard title="Toolbelt">
            <BadgeList items={toolbelt} variant="outline" />
          </InfoCard>
        </div>

        <div className="md:col-span-12 space-y-6">
          <InfoCard title="My Work Style">
            <p>
              When it comes to my work style, I'm detail-oriented. I manage my
              time intentionally so I have room to polish and still meet
              deadlines.
            </p>
          </InfoCard>

          <InfoCard title="What is next?">
            <p>
              I'm currently expanding out this portfolio and exploring
              opportunities in software engineering. Take a look around my
              projects, and feel free to get in touch.
            </p>
          </InfoCard>
        </div>

        <div className="md:col-span-12">
          <div className="flex flex-wrap gap-3">
            <Button as={NavLink} to="/projects" variant="primary">
              View Projects
            </Button>
            <Button
              as="a"
              href="/YANIEL_GONZALEZ_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              variant="accent"
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

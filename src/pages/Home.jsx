import React, { useEffect } from "react";
import headShot from "../assets/headShot.png";
import { Heading, Avatar, Badge } from "../components/atoms";
import BadgeList from "../components/molecules/BadgeList";
import IconLinksRow from "../components//molecules/IconLinksRow";
import CTAButtons from "../components/molecules/CTAButtons";
import SectionHeader from "../components/molecules/SectionHeader";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Yaniel Gonzalez";
  }, []);

  const accentBadges = ["USF CS B.S.", "Alumni", "Open to SWE roles"];
  const skills = ["Python", "C++", "C#", "SQL", "React"];

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
      <div className="absolute inset-0 bg-base-100" />
      <div className="absolute inset-y-0 left-0 w-1/2 md:w-[48%] lg:w-[42%] xl:w-[38%] 2xl:w-[36%] bg-primary" />

      <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div
          className="
            relative mx-auto
            w-[min(1040px,96vw)]
            h-auto md:h-[560px] lg:h-[620px]
            md:translate-x-2 lg:translate-x-4 xl:translate-x-6
            mt-6 md:mt-10
          "
        >
          <div className="relative w-full h-full rounded-2xl shadow-2xl bg-base-100 overflow-hidden">
            <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-primary" />
            <div className="md:hidden absolute inset-x-0 top-0 h-32 bg-primary" />

            <div
              className="
                md:absolute md:left-0 md:top-0 md:h-full md:w-1/2
                flex flex-col items-center justify-center gap-3
                px-4 pt-10 md:p-0
              "
            >
              <Avatar
                src={headShot}
                alt="Headshot"
                as="figure"
                className="relative w-36 h-36 md:w-60 md:h-72 lg:w-72 lg:h-80 rounded-full overflow-hidden bg-secondary"
                imgClassName="h-full w-full object-cover object-center scale-110 md:scale-105 lg:scale-105"
              />

              <div className="text-center text-base-content">
                <SectionHeader
                  title={"Yaniel Gonzalez"}
                  level={2}
                  align={"center"}
                />

                <BadgeList
                  items={accentBadges}
                  variant="accent"
                  className="mt-3 justify-center"
                  badgeClassName="badge-sm md:badge-md"
                />

                <BadgeList
                  items={skills}
                  variant="outline"
                  className="mt-4"
                  badgeClassName="badge-base badge-sm md:badge-md"
                />

                <a
                  href="mailto:yaniel1502@gmail.com"
                  className="block mt-3 text-sm md:text-base hover:underline"
                >
                  Email: yaniel1502@gmail.com
                </a>
                <a
                  href="tel:+18134033999"
                  className="block text-sm md:text-base hover:underline"
                >
                  Phone: (813) 403-3999
                </a>
              </div>

              <IconLinksRow className="mt-2" />
            </div>

            <div className="md:absolute md:right-0 md:top-0 md:h-full md:w-1/2 flex items-center">
              <div className="w-full px-4 sm:px-6 md:px-10 max-w-prose mt-6 md:mt-0">
                <SectionHeader title={"Welcome!"} level={1} />

                <p className="mt-3 text-sm md:text-lg leading-relaxed opacity-90">
                  I am Computer Science graduate from the University of South
                  Florida. I am passionate about programming and software
                  developement as a way to creating innovative solutions.
                </p>
                <p className="mt-3 text-sm md:text-lg leading-relaxed opacity-90">
                  Explore my site to get to know me and some of the projects I
                  have worked on!
                </p>

                <CTAButtons className="mt-5" />

                <div className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

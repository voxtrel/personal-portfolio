import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";
import SectionHeader from "../components/molecules/SectionHeader";
import ProjectsGrid from "../components/molecules/ProjectsGrid";
import ModalDialog from "../components/molecules/ModalDialog";
import BadgeList from "../components/molecules/BadgeList";
import ImageCarousel from "../components/molecules/ImageCarousel";
import ZoomViewer from "../components/molecules/ZoomViewer";
import { useEffect as useReactEffect, useState as useReactState } from "react";

function useSmallScreen(query = "(max-width: 640px)") {
  const [isSmall, setIsSmall] = useReactState(false);
  useReactEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setIsSmall(e.matches);
    setIsSmall(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return isSmall;
}

export default function Projects() {
  useEffect(() => {
    document.title = "Projects - Yaniel Gonzalez";
  }, []);

  const [openProject, setOpenProject] = useState(null);
  const [zoomMode, setZoomMode] = useState(false);
  const [zoomSrc, setZoomSrc] = useState(null);

  // Detect small screens (same logic, memoized from window.matchMedia)
  const isSmall = useSmallScreen("(max-width: 640px)");

  function handleCloseModal() {
    setZoomMode(false);
    setZoomSrc(null);
    setOpenProject(null);
  }

  const modalOpenState = useMemo(() => ({ zoomMode }), [zoomMode]);

  return (
    <section className="max-w-5xl mx-auto w-full px-4 py-10 md:py-12 overflow-x-hidden">
      <SectionHeader
        title="Projects"
        level={1}
        titleClassName="text-3xl md:text-4xl font-bold"
      />

      <ProjectsGrid projects={projects} onOpen={setOpenProject} />

      {/* ===== Modal ===== */}
      {openProject && (
        <ModalDialog
          open={modalOpenState} // carries zoomMode to pick the right class set
          onClose={handleCloseModal}
          classNameWhenOpen="modal-box w-[98vw] max-w-none h-[92svh] p-0 overflow-hidden"
          classNameDefault="modal-box max-w-4xl overflow-y-auto"
        >
          {zoomMode ? (
            <ZoomViewer
              src={zoomSrc}
              title={openProject?.title}
              isSmall={isSmall}
              onExit={() => {
                setZoomMode(false);
                setZoomSrc(null);
              }}
            />
          ) : (
            <>
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-xl">{openProject.title}</h3>
                  {openProject.stack?.length > 0 && (
                    <BadgeList
                      items={openProject.stack}
                      variant="outline"
                      className="mt-2"
                    />
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-ghost"
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <p className="mt-4">{openProject.description}</p>

              {/* Carousel (click image => enter zoom mode) */}
              <div className="mt-6">
                <ImageCarousel
                  project={openProject}
                  onZoom={(src) => {
                    setZoomSrc(src);
                    setZoomMode(true);
                  }}
                />
              </div>

              {/* Footer actions */}
              <div className="modal-action">
                {openProject.code && (
                  <a
                    href={openProject.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    View Code
                  </a>
                )}

                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </>
          )}
        </ModalDialog>
      )}
    </section>
  );
}

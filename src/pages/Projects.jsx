
import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// import { createPortal } from 'react-dom';



export default function Projects() {
  useEffect(() => { document.title = 'Projects - Yaniel Gonzalez'; }, []);

  const [openProject, setOpenProject] = useState(null);   
  const modalRef = useRef(null);

  // when openProject becomes non-null, open the <dialog>
  useEffect(() => {
    if (openProject && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [openProject]);


  function handleCloseModal() {
    if (modalRef.current?.open) {
      modalRef.current.close();
    }
    setOpenProject(null);
  }

  const [zoomMode, setZoomMode] = useState(false);
  const [zoomSrc, setZoomSrc] = useState(null);

  const zoomApiRef = useRef(null);


  // Detect small screens 
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {

    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = (e) => setIsSmall(e.matches);
    setIsSmall(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);

  }, []);


  return (  
    <section className="max-w-5xl mx-auto w-full px-4 py-10 md:py-12 overflow-x-hidden">

      <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">

        {projects.map((p) => {

          const badges = Array.isArray(p.stack) ? p.stack : [];

          return (
            <article
              key = {p.id}
              className="card w-full min-w-0 bg-base-100 shadow-lg hover:shadow-lg transition-shadow"
            >
              <figure className="aspect-video bg-base-200">
                <img
                  src={typeof p.images[0] === 'string' ? p.images[0] : p.images[0].src}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </figure>

              <div className="card-body">

                <h2 className="card-title">{p.title}</h2>
                <p className="text-md">{p.description}</p>

                {badges.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {badges.map((tag) => (
                      <span key = {p.id + tag} className="badge badge-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="card-actions justify-end mt-4">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setOpenProject(p)}
                    aria-label={`Open details for ${p.title}`}
                  >
                    View
                  </button>
                </div>
                
              </div>
            </article>
          );
        })}
      </div>

      {/* ===== Modal ===== */}
      {openProject && (
        <dialog ref={modalRef} className="modal" onClose={handleCloseModal}>

          {/* <div className="modal-box max-w-4xl overflow-y-auto"> */}
          <div
            className={
              zoomMode
                ? "modal-box w-[98vw] max-w-none h-[92svh] p-0 overflow-hidden"
                : "modal-box max-w-4xl overflow-y-auto"
            }
          >

            {zoomMode ? (

              <TransformWrapper
                initialScale={isSmall ? 0.85 : 1}
                minScale={isSmall ? 0.5 : 1}
                maxScale={8}
                centerOnInit
                limitToBounds={false}
                wheel={{ step: 0.2 }}
                doubleClick={{ mode: 'zoomIn' }}
                pinch={{ step: 5 }}
                onInit={(api) => { zoomApiRef.current = api; }}
              >

                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between gap-2 p-2 border-b border-base-200">
                    <div className="text-sm opacity-70 truncate">{openProject.title}</div>
                    <div className="flex items-center gap-2">
                      <button type="button" className="btn btn-sm"
                        onClick={() => zoomApiRef.current?.zoomOut()}
                        aria-label="Zoom out">−</button>

                      <button type="button" className="btn btn-sm"
                        onClick={() => zoomApiRef.current?.zoomIn()}
                        aria-label="Zoom in">+</button>

                      <button type="button" className="btn btn-sm btn-ghost"
                        onClick={() => zoomApiRef.current?.resetTransform()}
                        aria-label="Reset">Reset</button>

                      <button
                        type="button"
                        className="btn btn-sm btn-ghost"
                        onClick={() => { setZoomMode(false); setZoomSrc(null); }}
                        aria-label="Exit zoom"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Zoom/pan canvas */}
                  <div className="flex-1 bg-base-200 overflow-hidden">
                    <TransformComponent wrapperClass="w-full h-full grid place-items-center">
                      <img
                        src={zoomSrc}
                        alt={openProject?.title || "Zoomed image"}
                        className="max-w-none"
                        draggable={false}
                      />
                    </TransformComponent>
                  </div>
                </div>
              </TransformWrapper>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="font-bold text-xl">{openProject.title}</h3>

                    {openProject.stack?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {openProject.stack.map(tag => (
                          <span key={openProject.id + tag} className="badge badge-outline">
                            {tag}
                          </span>
                        ))}
                      </div>
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
                <p className="mt-4">
                  {openProject.description}
                </p>

                {/* Carousel */}
                <div className="mt-6">

                  {Array.isArray(openProject.images) && openProject.images.length > 0 ? (

                    <div className="carousel w-full">

                      {openProject.images.map((img, index) => {

                        const src = typeof img === 'string' ? img : img.src;
                        const cap = typeof img === 'string'
                          ? `Screenshot ${index + 1}`
                          : (img.caption || `Screenshot ${index + 1}`);

                        const id = `proj-${openProject.id}-slide-${index + 1}`;
                        const prevId = `proj-${openProject.id}-slide-${index === 0 ? openProject.images.length : index}`;
                        const nextId = `proj-${openProject.id}-slide-${index + 2 > openProject.images.length ? 1 : index + 2}`;

                        return (
                          <div key={id} id={id} className="carousel-item w-full flex-col">

                            <div className="relative w-full rounded-lg bg-base-200 grid place-items-center aspect-auto max-h-[70svh] sm:aspect-video sm:max-h-none ">
                              <img
                                src={src}
                                alt={`${openProject.title} screenshot ${index + 1}`}
                                className="w-auto h-auto max-w-full max-h-[70svh]  /* phones: natural size, no stretch */
                                  sm:w-full sm:h-full sm:max-h-full       
                                  object-contain cursor-zoom-in"
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                                onClick={() => {
                                  setZoomSrc(src);
                                  setZoomMode(true);
                                }}

                              />

                              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={`#${prevId}`} className="btn btn-circle" aria-label="Previous slide">❮</a>
                                <a href={`#${nextId}`} className="btn btn-circle" aria-label="Next slide">❯</a>
                              </div>
                            </div>

                            <div className="mt-3 text-sm md:text-base text-base-content/90 whitespace-pre-line">
                              {cap}
                            </div>
                            
                          </div>
                        );
                      })}
                    </div>

                  ) : (
                    <div className="aspect-video w-full bg-base-200 rounded-lg flex items-center justify-center text-base-content/60">
                      No images yet
                    </div>
                  )}
                </div>

                {/* Footer actions */}
                <div className="modal-action">
                  
                  {openProject.code && (
                    <a href={openProject.code} target="_blank" rel="noreferrer" className="btn btn-outline">
                      View Code
                    </a>
                  )}

                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>

                </div>
              </>

            )}


          </div>

          {/* Click outside to close (daisyUI backdrop) */}
          <form method="dialog" className="modal-backdrop">
            <button aria-label="Close modal">close</button>
          </form>
        </dialog>
      )}

      

    </section>
)};

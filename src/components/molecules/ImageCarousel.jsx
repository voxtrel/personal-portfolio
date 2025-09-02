import ImageSkeleton from "./ImageSkeleton";

export default function ImageCarousel({ project, onZoom }) {
  const images = Array.isArray(project.images) ? project.images : [];
  if (!images.length) {
    return (
      <div className="aspect-video w-full bg-base-200 rounded-lg flex items-center justify-center text-base-content/60">
        No images yet
      </div>
    );
  }

  return (
    <div className="carousel w-full">

      {images.map((img, index) => {

        const src = typeof img === "string" ? img : img.src;
        
        const cap =
          typeof img === "string"
            ? `Screenshot ${index + 1}`
            : img.caption || `Screenshot ${index + 1}`;

        const id = `proj-${project.id}-slide-${index + 1}`;

        const prevId = `proj-${project.id}-slide-${
          index === 0 ? images.length : index
        }`;
        
        const nextId = `proj-${project.id}-slide-${
          index + 2 > images.length ? 1 : index + 2
        }`;

        return (
          <div key={id} id={id} className="carousel-item w-full flex-col">
            <div className="relative w-full rounded-lg bg-base-200 grid place-items-center aspect-auto max-h-[70svh] sm:aspect-video sm:max-h-none">
              
              <ImageSkeleton
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                containerClassName="w-full h-full"
                className="w-auto h-auto max-w-full max-h-[70svh]
                           sm:w-full sm:h-full sm:max-h-full
                           object-contain"
                skeletonClassName="rounded-lg"  
                draggable={false}
                // onClick={() => onZoom(src)}
              />

              <button
                type="button"
                onClick={() => onZoom(src)}
                className="absolute bottom-3 right-3 z-10 btn btn-sm btn-circle bg-base-100/90 hover:bg-base-100 border border-base-300 shadow"
                aria-label="Zoom image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>


              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#${prevId}`}
                  className="btn btn-circle"
                  aria-label="Previous slide"
                >
                  ❮
                </a>
                <a
                  href={`#${nextId}`}
                  className="btn btn-circle"
                  aria-label="Next slide"
                >
                  ❯
                </a>
              </div>
            </div>
            <div className="mt-3 text-sm md:text-base text-base-content/90 whitespace-pre-line">
              {cap}
            </div>
          </div>
        );
      })}
    </div>
  );
}

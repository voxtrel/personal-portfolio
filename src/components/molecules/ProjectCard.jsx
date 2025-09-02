import BadgeList from "./BadgeList";
import ImageSkeleton from "./ImageSkeleton";

export default function ProjectCard({ project, onOpen }) {
  const cover =
    typeof project.images?.[0] === "string"
      ? project.images[0]
      : project.images?.[0]?.src;
  const badges = Array.isArray(project.stack) ? project.stack : [];

  return (
    <article className="card w-full min-w-0 bg-base-100 shadow-lg hover:shadow-lg transition-shadow">

      <figure className="aspect-video bg-base-200">
        <ImageSkeleton
          src={cover}
          alt={project.title}
          containerClassName="w-full h-full rounded-none" 
          className="w-full h-full object-cover"
          skeletonClassName="rounded-none" 
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-md">{project.description}</p>

        {badges.length > 0 && (
          <BadgeList items={badges} variant="outline" className="mt-2" />
        )}

        <div className="card-actions justify-end mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onOpen(project)}
            aria-label={`Open details for ${project.title}`}
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
}

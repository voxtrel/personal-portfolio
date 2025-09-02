import { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ZoomViewer({ src, title, isSmall, onExit }) {
  const zoomApiRef = useRef(null);

  return (
    <TransformWrapper
      initialScale={isSmall ? 0.85 : 1}
      minScale={isSmall ? 0.5 : 1}
      maxScale={8}
      centerOnInit
      limitToBounds={false}
      wheel={{ step: 0.2 }}
      doubleClick={{ mode: "zoomIn" }}
      pinch={{ step: 5 }}
      onInit={(api) => {
        zoomApiRef.current = api;
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between gap-2 p-2 border-b border-base-200">
          <div className="text-sm opacity-70 truncate">{title}</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => zoomApiRef.current?.zoomOut()}
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => zoomApiRef.current?.zoomIn()}
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={() => zoomApiRef.current?.resetTransform()}
              aria-label="Reset"
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={onExit}
              aria-label="Exit zoom"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 bg-base-200 overflow-hidden">
          <TransformComponent wrapperClass="w-full h-full grid place-items-center">
            <img
              src={src}
              alt={title || "Zoomed image"}
              className="max-w-none"
              draggable={false}
            />
          </TransformComponent>
        </div>
      </div>
    </TransformWrapper>
  );
}

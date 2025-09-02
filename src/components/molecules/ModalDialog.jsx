import { useEffect, useRef } from "react";

export default function ModalDialog({
  open,
  onClose,
  children,
  classNameWhenOpen,
  classNameDefault,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (open) ref.current.showModal();
    else if (ref.current.open) ref.current.close();
  }, [open]);

  return (
    <dialog ref={ref} className="modal" onClose={onClose}>
      <div
        className={
          open?.zoomMode
            ? classNameWhenOpen ??
              "modal-box w-[98vw] max-w-none h-[92svh] p-0 overflow-hidden"
            : classNameDefault ?? "modal-box max-w-4xl overflow-y-auto"
        }
      >
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button aria-label="Close modal">close</button>
      </form>
    </dialog>
  );
}

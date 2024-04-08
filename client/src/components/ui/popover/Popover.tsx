import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

function Popover({
  children,

  content,
  isOpen,
  setIsOpen,

  trigger = "click",
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  trigger?: string;
}) {
  const wrapperRef = useRef<HTMLInputElement>(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setIsOpen(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      // Bind the event listener

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up

        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center"
    >
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>

      <div
        hidden={!isOpen}
        className="min-w-fit w-[200px] h-fit absolute top-[100%] z-20 transition-all"
      >
        <div className="rounded bg-white p-3 shadow-[10px_30px_150px_rgba(46,38,92,0.25)] mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Popover;

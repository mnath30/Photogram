import { useRef, useEffect } from "react";

const useOnClickOutside = (closeHandler) => {
  const domNode = useRef();

  const outsideClickHandler = (event) => {
    if (!domNode?.current?.contains(event.target)) {
      closeHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });

  return domNode;
};

export { useOnClickOutside };

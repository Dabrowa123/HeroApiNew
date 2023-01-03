import { useState, useEffect } from "react";

const useShowUpOnOffsetInPath = (offset, location) => {
  const [isvisible, setIsVisible] = useState(false);
  const offsetReached = () => {
    if (window.location.pathname !== location) {
      setIsVisible(true);
    } else {
      if (window.scrollY >= offset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  window.addEventListener("scroll", offsetReached);

  // prevent showing up after navigating above offset from different location
  useEffect(() => {
    offsetReached();
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return isvisible;
};

export default useShowUpOnOffsetInPath;

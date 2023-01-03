import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const useShowUpOnOffsetInPath = (offset, location) => {
  const [isvisible, setIsVisible] = useState(false);
  const currentLocation = useLocation();

  const offsetReached = () => {
    if (currentLocation.pathname !== location) {
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
  }, [currentLocation.pathname]);

  return isvisible;
};

export default useShowUpOnOffsetInPath;

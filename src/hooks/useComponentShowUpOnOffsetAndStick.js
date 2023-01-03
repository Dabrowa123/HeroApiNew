import { useState, useEffect } from "react";

const useComponentShowUpOnOffsetAndStick = (offset, location) => {
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
  useEffect(() => {
    offsetReached();
    // eslint-disable-next-line
  }, [window.location.pathname]);

  return isvisible;
};

export default useComponentShowUpOnOffsetAndStick;

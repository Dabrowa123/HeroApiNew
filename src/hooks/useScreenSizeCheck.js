import { useState, useEffect } from "react";

function useScreenSizeCheck() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let screenSize = window.innerWidth;

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, [screenSize]);

  return [isMobile, isDesktop];
}

export default useScreenSizeCheck;

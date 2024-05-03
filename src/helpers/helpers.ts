import React from "react";
import { useEffect, useState } from "react";

export function useWindowSize() {
    
    const [windowSize, setWindowSize] = useState({
      width: 1025,
      height: 1025,
    });
  
    useEffect(() => {

      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Call handler right away so state gets updated with initial window size
      handleResize();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
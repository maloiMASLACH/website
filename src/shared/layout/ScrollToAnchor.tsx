import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (hash) {
      lastHash.current = hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [hash]);

  return null;
};

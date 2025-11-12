import React, { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 ${isVisible ? "block" : "hidden"}`}>
      <button id="fun-button" className="animate-bounce" onClick={handleScrollToTop}>
        <ArrowUpCircleIcon className="text-white h-8 w-8" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
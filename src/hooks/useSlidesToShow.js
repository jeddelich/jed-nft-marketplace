import { useEffect, useState } from "react";

function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    function updateSlides() {
      const width = window.innerWidth;

      if (width < 570) setSlidesToShow(1);
      else if (width < 768) setSlidesToShow(2);
      else if (width < 1200) setSlidesToShow(3);
      else setSlidesToShow(4);
    }

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return slidesToShow;
}

export default useSlidesToShow;
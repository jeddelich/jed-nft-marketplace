import { useEffect } from "react";

function useSlickRefresh(sliderRef, dependency) {
  useEffect(() => {
    if (!sliderRef.current) return;

    const timeout = setTimeout(() => {
      sliderRef.current.slickGoTo(0);
      sliderRef.current.slickRefresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [dependency]);
}

export default useSlickRefresh;
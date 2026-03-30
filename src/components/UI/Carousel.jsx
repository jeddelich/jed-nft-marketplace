import Slider from "react-slick";
import { Link } from "react-router-dom";
import { carouselSettings } from "./carouselSettings";
import { useEffect, useRef, useState } from "react";

function Carousel({ hotCollectionsData }) {
  const sliderRef = useRef(null);
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

  useEffect(() => {
    if (!sliderRef.current) return;

    const timeout = setTimeout(() => {
      sliderRef.current.slickGoTo(0);
      sliderRef.current.slickRefresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [slidesToShow]);

  return (
    <Slider
      ref={sliderRef}
      {...carouselSettings}
      slidesToShow={slidesToShow}
      infinite={hotCollectionsData.length > slidesToShow}
      className="carousel-container"
    >
      {hotCollectionsData.map((collection) => (
        <div key={collection.id}>
          <div className="nft_coll mx-1">
            <div className="nft_wrap">
              <Link to={`/item-details/${collection.nftId}`}>
                <img src={collection.nftImage} className="img-fluid" alt="" />
              </Link>
            </div>
            <div className="nft_coll_pp">
              <Link to={`/author/${collection.authorId}`}>
                <img className="pp-coll" src={collection.authorImage} alt="" />
              </Link>
              <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info">
              <Link to={`/item-details/${collection.nftId}`}>
                <h4>{collection.title}</h4>
              </Link>
              <span>ERC-{collection.code}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { carouselSettings } from "./carouselSettings";
import { useRef } from "react";

// Custom hooks
import useSlidesToShow from "../../hooks/useSlidesToShow";
import useSlickRefresh from "../../hooks/useSlickRefresh";

function Carousel({ hotCollectionsData }) {
  const sliderRef = useRef(null);
  const slidesToShow = useSlidesToShow();

  useSlickRefresh(sliderRef, hotCollectionsData);

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
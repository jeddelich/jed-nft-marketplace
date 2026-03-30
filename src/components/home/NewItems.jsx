import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { carouselSettings } from "../UI/carouselSettings";
import ItemCards from "../UI/ItemCards";
import ItemSkeleton from "../UI/ItemSkeleton";

// Custom hooks
import useSlidesToShow from "../../hooks/useSlidesToShow";
import useSlickRefresh from "../../hooks/useSlickRefresh";

const NewItems = () => {
  const [newItemsData, setNewItemsData] = useState(null);

  const sliderRef = useRef(null);
  const slidesToShow = useSlidesToShow();
  useSlickRefresh(sliderRef, newItemsData);

  async function requestNewItems() {
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems",
    );
    setNewItemsData(data);
  }

  useEffect(() => {
    requestNewItems();
  }, []);

  return (
    <section data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {newItemsData ? (
            <Slider ref={sliderRef} {...carouselSettings} slidesToShow={slidesToShow} infinite={newItemsData.length > slidesToShow}>
              {newItemsData.map((item) => (<ItemCards key={item.id} item={item} />))}
            </Slider>
          ) : (
            <Slider {...carouselSettings}>
              {new Array(6).fill("").map((item) => (
              <ItemSkeleton key={item.id} item={item}/>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;

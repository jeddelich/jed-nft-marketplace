import { Link } from "react-router-dom";
import ItemCards from "../UI/ItemCards";
// import ItemSkeleton from "../UI/ItemSkeleton"; // TEMP: disabled for Lighthouse comparison
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ExploreItems = ({
  displayMore,
  changeFilter,
  cardsDisplayed,
  exploreData,
}) => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" data-aos-offset="0">
        <select id="filter-items" defaultValue="" onChange={changeFilter}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {exploreData ? (
        exploreData
          .slice(0, cardsDisplayed)
          .map((item, index) => (
            <ItemCards
              key={index}
              item={item}
              disableLazyLoad={true}
              wrapperClass="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 w-full"
              wrapperStyle={{ display: "block", backgroundSize: "cover" }}
            />
          ))
      ) : null /* TEMP: skeleton disabled for Lighthouse comparison */}
      <div className="col-md-12 text-center" data-aos="fade-up-extra-small" data-aos-duration="800" data-aos-delay="200" data-aos-once="true" data-aos-offset="0">
        {cardsDisplayed < exploreData?.length && (
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={displayMore}
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;

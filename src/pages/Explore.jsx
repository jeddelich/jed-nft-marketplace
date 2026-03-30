import { useEffect, useState } from "react";
import SubHeader from "../images/subheader.jpg";
import ExploreItems from "../components/explore/ExploreItems";
import axios from "axios";

const Explore = () => {
  const [exploreData, setExploreData] = useState(null);
  const [cardsDisplayed, setCardsDisplayed] = useState(8);
  const [filter, setFilter] = useState("");

  function displayMore(event) {
    event.preventDefault();
    cardsDisplayed < exploreData?.length &&
      setCardsDisplayed(cardsDisplayed + 4);
  }

  function changeFilter(event) {
    setExploreData(null);
    setFilter("?filter=" + event.target.value);
  }

  useEffect(() => {
    let isMounted = true;

    async function requestExploreData() {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore${filter}`,
      );

      if (isMounted) {
        setExploreData(data);
      }
    }

    requestExploreData();

    return () => {
      isMounted = false;
    };
  }, [filter]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="subheader"
          className="text-light"
          style={{ background: `url("${SubHeader}") top` }}
        >
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Explore</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <ExploreItems
                displayMore={displayMore}
                changeFilter={changeFilter}
                cardsDisplayed={cardsDisplayed}
                exploreData={exploreData}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;

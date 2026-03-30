import Countdown from "./Countdown";
import "../../css/styles/newItemsSkeleton.css";

function ItemSkeleton({ item, wrapperClass = "", wrapperStyle = {} }) {
  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div key={item.id}>
        <div className="nft__item nft__item--skeleton mx-1">
          <div className="author_list_pp">
              <div className="skeleton__img"></div>
              <i className="fa fa-check"></i>
          </div>
          {item.expiryDate && <Countdown expiryDate={item.expiryDate} />}
          <div className="nft__item_wrap nft__item_wrap-skeleton">
            <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  {/* <Link href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </Link>
                  <Link href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </Link>
                  <Link href="">
                    <i className="fa fa-envelope fa-lg"></i>
                  </Link> */}
                </div>
              </div>
            </div>

              <img
                src={item.nftImage}
                className="lazy nft__item_preview"
                alt=""
              />
          </div>
          <div className="nft__item_info nft__item_info-skeleton">
            <div className="nft__item_bottom-skeleton">
              <div className="nft__item_price-skeleton"></div>
              <div className="nft__item_like-skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSkeleton;

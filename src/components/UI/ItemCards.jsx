import { Link } from "react-router-dom";
import Countdown from "./Countdown";

function ItemCards({ item, author, wrapperClass = "", wrapperStyle = {} }) {
  return (
    <div className={wrapperClass} style={wrapperStyle} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true" data-aos-offset="0">
      <div className="nft__item mx-1">
        <div className="author_list_pp">
          <Link
            to={`/author/${item.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Creator: Monica Lucas"
          >
            <img className="lazy" src={item.authorImage || author.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        {item.expiryDate && <Countdown expiryDate={item.expiryDate} />}
        <div className="nft__item_wrap">
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

          <Link to={`/item-details/${item.nftId}`}>
            <img
              src={item.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to="/item-details">
            <h4>{item.title}</h4>
          </Link>
          <div className="nft__item_price">{item.price} ETH</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCards;

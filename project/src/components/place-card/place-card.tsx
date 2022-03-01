import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Offer, OfferOptions} from '../../types/offer';
import {AppRoute} from '../../const';

type PlaceCardProps = {
  offer: Offer,
  options: OfferOptions,
}

function PlaceCard({offer, options}:PlaceCardProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(false);
  return (
    <article className={`${options.placeCardClass} place-card`} onMouseEnter={() => {setActiveCard(!activeCard);}} onMouseLeave={() => {setActiveCard(!activeCard);}}>
      {offer.premium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${options.placeCardImgWrapClass} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.srcPreview} width={options.imgSize.width} height={options.imgSize.height} alt="Place image"/>
        </Link>
      </div>
      <div className={`${options.placeCardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.favorites && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

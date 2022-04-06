import { Link } from 'react-router-dom';
import { Offer, OfferOptions } from '../../types/offer';
import {AppRoute, bookmarkButtonOptions} from '../../const';
import {memo} from 'react';
import BookmarkButton from '../bookmark-button/bookmark-button';

type PlaceCardProps = {
  offer: Offer,
  options: OfferOptions,
  onMouseEnterHandler?: (offer: Offer) => void,
  onMouseLeaveHandler?: () => void,
}

function PlaceCard({offer, options, onMouseEnterHandler, onMouseLeaveHandler}:PlaceCardProps): JSX.Element {
  return (
    <article
      className={`${options.placeCardClass} place-card`}
      onMouseEnter={() => {
        if (onMouseEnterHandler) {
          onMouseEnterHandler(offer);
        } }}
      onMouseLeave={onMouseLeaveHandler}
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${options.placeCardImgWrapClass} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={options.imgSize.width} height={options.imgSize.height} alt={offer.title}/>
        </Link>
      </div>
      <div className={`${options.placeCardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton offer={offer} options={bookmarkButtonOptions.PLACE_CARD_OPTIONS}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating)*20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default memo(PlaceCard);

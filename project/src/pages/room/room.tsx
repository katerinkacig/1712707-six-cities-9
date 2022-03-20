import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NonFound from '../not-found/not-found';
import {Offer, OfferOptions} from '../../types/offer';
import { useAppSelector } from '../../hooks';
import {store} from '../../store';
import {fetchNearOffersAction, fetchReviewsAction} from '../../store/api-actions';
import PlacesNearList from '../../components/plases-near-list/places-near-list';
import MapNear from '../../components/map-near/map-near';

type RoomProps = {
  offerOptions: OfferOptions
}

function Room({offerOptions}:RoomProps): JSX.Element {
  const { offers } = useAppSelector((state) => state);
  const params = useParams();

  function getOfferById(id:number | string | undefined):Offer | undefined {
    if (!id) {
      return undefined;
    }
    return offers.find((offer) => (offer as Offer).id === +id);
  }

  const offer = getOfferById(params.id);

  useEffect(() => {
    if (offer) {
      store.dispatch(fetchReviewsAction((offer as Offer).id));
      store.dispatch(fetchNearOffersAction((offer as Offer).id));
    }
  }, [offer]);

  const { reviews } = useAppSelector((state) => state);

  if (!offer) {return <NonFound/>;}

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer && offer.images.map((image, index) => {
                const keyValue = `${index}-${image}`;
                if (index < 6) {
                  return (
                    <div key={keyValue} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Photo studio"/>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer && offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer && offer.title}
                </h1>
                <button className={`property__bookmark-button ${(offer && offer.isFavorite) && 'property__bookmark-button--active'} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer && offer.rating*20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer && offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer && offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer && offer.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer && offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer && offer.goods &&
                  offer.goods.map((good, id) => {
                    const keyValue = `${id}-${good}`;
                    return (
                      <li key={keyValue} className="property__inside-item">
                        {good}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${offer && offer.host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer && offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer && offer.host.name}
                  </span>
                  {offer && offer.host.isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer && offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList/>
                <ReviewsForm/>
              </section>
            </div>
          </div>
          <MapNear activePoint={offer}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesNearList offerOptions={offerOptions}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;

import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import PlacesNearList from '../../components/plases-near-list/places-near-list';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Map from '../../components/map/map';
import NonFound from '../not-found/not-found';
import {Offer} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchNearOffersAction, fetchReviewsAction} from '../../store/api-actions';
import {AuthorizationStatus, bookmarkButtonOptions, OFFER_GALLERY_IMAGES_COUNT} from '../../const';
import {getOffers} from '../../store/offer-process/selectors';
import {getNearOffers} from '../../store/near-offers-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getReviews} from '../../store/reviews-process/selectors';
import {setFirstSymbolToUpperCase} from '../../utils';

function Room(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const nearOffers = useAppSelector(getNearOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getReviews);
  const params = useParams();
  const dispatch = useAppDispatch();

  function getOfferById(id:number | string | undefined):Offer | undefined {
    if (!id) {
      return undefined;
    }
    return offers.find((offer) => (offer as Offer).id === +id);
  }

  const offer = getOfferById(params.id);

  useEffect(() => {
    if (offer) {
      dispatch(fetchReviewsAction((offer).id));
      dispatch(fetchNearOffersAction((offer).id));
    }
  }, [offer, dispatch]);

  if (!offer) {return <NonFound/>;}

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, OFFER_GALLERY_IMAGES_COUNT).map((image, index) => {
                const keyValue = `${index}-${image}`;
                return (
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src={image} alt={offer.title}/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <BookmarkButton offer={offer} options={bookmarkButtonOptions.ROOM_OPTIONS}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offer.rating*20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{setFirstSymbolToUpperCase(offer.type)}</li>
                <li className="property__feature property__feature--bedrooms">{offer.bedrooms}</li>
                <li className="property__feature property__feature--adults">Max {offer.maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((good, id) => {
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
                  <div className={`property__avatar-wrapper ${offer.host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  {offer.host.isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList/>
                {(authorizationStatus === AuthorizationStatus.Auth) && <ReviewsForm offerId={offer.id}/>}
              </section>
            </div>
          </div>
          <Map activePoint={offer} points={nearOffers} classMap='property__map'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesNearList/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;

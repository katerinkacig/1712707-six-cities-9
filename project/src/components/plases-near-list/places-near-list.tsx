import PlaceCard from '../place-card/place-card';
import {useAppSelector} from '../../hooks';
import React from 'react';
import {offerOptions} from '../../const';

function PlacesNearList(): JSX.Element {
  const { nearOffers } = useAppSelector(({NEAR_OFFERS}) => NEAR_OFFERS);
  return (
    <div className="near-places__list places__list">
      {nearOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} options={offerOptions.OFFER_NEAR_OPTIONS}/>)}
    </div>
  );
}
export default PlacesNearList;

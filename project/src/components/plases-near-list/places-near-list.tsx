import {OfferOptions} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useAppSelector} from '../../hooks';
import React from 'react';

type PlacesNearListProps = {
  offerOptions: OfferOptions,
}

function PlacesNearList({offerOptions}:PlacesNearListProps): JSX.Element {
  const { nearOffers } = useAppSelector(({NEAR_OFFERS}) => NEAR_OFFERS);
  return (
    <div className="near-places__list places__list">
      {nearOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} options={offerOptions}/>)}
    </div>
  );
}
export default PlacesNearList;

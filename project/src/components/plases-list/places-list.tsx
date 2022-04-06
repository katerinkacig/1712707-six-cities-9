import {Offer, OfferOptions} from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setHoveredOfferAction} from '../../store/offer-process/offer-process';
import {useCallback} from 'react';
import {getActiveOffers} from '../../store/offer-process/selectors';

type PlacesListProps = {
  offerOptions: OfferOptions,
}

function PlacesList({offerOptions}:PlacesListProps): JSX.Element {
  const activeOffers = useAppSelector(getActiveOffers);
  const dispatch = useAppDispatch();
  const handleMouseEnter = useCallback((offer:Offer) => {
    dispatch(setHoveredOfferAction(offer));
  }, [dispatch]);
  const handleMouseLeave = useCallback(() => {
    dispatch(setHoveredOfferAction(null));
  }, [dispatch]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {activeOffers.map((offer) =>
        (
          <PlaceCard
            key={offer.id}
            offer={offer}
            options={offerOptions}
            onMouseEnterHandler={handleMouseEnter}
            onMouseLeaveHandler={handleMouseLeave}
          />
        ),
      )}
    </div>
  );
}
export default PlacesList;

import { OfferOptions } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { useAppSelector } from '../../hooks';

type PlacesListProps = {
  offerOptions: OfferOptions,
}

function PlacesList({offerOptions}:PlacesListProps): JSX.Element {
  const { activeOffers } = useAppSelector(({OFFERS}) => OFFERS);
  return (
    <div className="cities__places-list places__list tabs__content">
      {activeOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} options={offerOptions}/>)}
    </div>
  );
}
export default PlacesList;

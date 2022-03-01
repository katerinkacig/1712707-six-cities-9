import {Offer, OfferOptions} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: Offer[],
  offerOptions: OfferOptions,
}

function PlacesFavoritesList({offers, offerOptions}:PlacesListProps): JSX.Element {
  return (
    <>
      {offers.filter((offer) => offer.favorites).map((offer) => <PlaceCard key={offer.id} offer={offer} options={offerOptions}/>)}
    </>
  );
}
export default PlacesFavoritesList;

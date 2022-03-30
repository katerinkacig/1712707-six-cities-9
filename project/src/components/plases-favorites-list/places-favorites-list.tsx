import PlaceCard from '../place-card/place-card';
import {offerOptions} from '../../const';
import {Offer} from '../../types/offer';

type PlacesFavoritesListProps = {
  favoriteOffers: Offer[],
}

function PlacesFavoritesList({favoriteOffers}:PlacesFavoritesListProps): JSX.Element {
  return (
    <>
      {favoriteOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} options={offerOptions.OFFER_FAVOURITES_OPTIONS}/>)}
    </>
  );
}
export default PlacesFavoritesList;

import PlaceCard from '../place-card/place-card';
import {offerOptions} from '../../const';
import {useAppSelector} from '../../hooks';


function PlacesFavoritesList(): JSX.Element {
  const { favoriteOffers } = useAppSelector(({FAVORITE_OFFERS}) => FAVORITE_OFFERS);
  return (
    <>
      {favoriteOffers.filter((offer) => offer.isFavorite).map((offer) => <PlaceCard key={offer.id} offer={offer} options={offerOptions.OFFER_FAVOURITES_OPTIONS}/>)}
    </>
  );
}
export default PlacesFavoritesList;

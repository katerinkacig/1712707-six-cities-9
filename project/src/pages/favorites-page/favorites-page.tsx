import {useEffect} from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {getFavoriteOffers} from '../../store/favorite-offers-process/selectors';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ? <Favorites/> : <FavoritesEmpty/>}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;

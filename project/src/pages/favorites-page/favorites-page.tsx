import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import Favorites from '../../components/favorites/favorites';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function FavoritesPage(): JSX.Element {
  const { favoriteOffers } = useAppSelector(({FAVORITE_OFFERS}) => FAVORITE_OFFERS);

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

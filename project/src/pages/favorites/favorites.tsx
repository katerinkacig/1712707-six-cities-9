import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PlacesFavoritesList from '../../components/plases-favorites-list/places-favorites-list';
import {Offer} from '../../types/offer';
import {offerOptions} from '../../const';

type FavoritesProps = {
  offers: Offer[],
}

function Favorites({offers}:FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlacesFavoritesList offers={offers} offerOptions={offerOptions.OFFER_FAVOURITES_OPTIONS} />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;

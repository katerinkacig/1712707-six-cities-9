import PlacesList from '../../components/plases-list/places-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import {Offer, OfferOptions} from '../../types/offer';
import {City} from '../../types/city';

type MainScreenProps = {
  placesCount: number,
  offers: Offer[],
  offerOptions: OfferOptions,
  city: City,
}

function Main({placesCount, offers, offerOptions, city}:MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <div className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </div>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#todo">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                    Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <div className="cities__places-list places__list tabs__content">
                <PlacesList offers={offers} offerOptions={offerOptions}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={city} points={offers}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

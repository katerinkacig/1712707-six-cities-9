import PlacesList from '../../components/plases-list/places-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import {OfferOptions} from '../../types/offer';
import {useAppSelector} from '../../hooks';

type MainScreenProps = {
  offerOptions: OfferOptions
}

function Main({offerOptions}:MainScreenProps): JSX.Element {
  const { cities, activeOffers, activeCity } = useAppSelector((state) => state);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${!activeOffers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={cities}/>
        <div className="cities">
          <div className={`cities__places-container container ${!activeOffers.length && 'cities__places-container--empty'}`}>
            {activeOffers.length !== 0 &&
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeOffers.length} places to stay in {activeCity.name}</b>
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
                <PlacesList offerOptions={offerOptions}/>
              </section>}
            {activeOffers.length === 0 &&
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                </div>
              </section>}
            <div className="cities__right-section">
              {activeOffers.length && <Map points={activeOffers} classMap='cities__map'/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

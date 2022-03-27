import PlacesList from '../../components/plases-list/places-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { OfferOptions } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import SortOptions from '../../components/sort-options/sort-options';

type MainScreenProps = {
  offerOptions: OfferOptions
}

function Main({offerOptions}:MainScreenProps): JSX.Element {
  const { activeOffers, activeCity, hoveredOffer } = useAppSelector(({OFFERS}) => OFFERS);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${!activeOffers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList/>
        <div className="cities">
          <div className={`cities__places-container container ${!activeOffers.length && 'cities__places-container--empty'}`}>
            {activeOffers.length !== 0 &&
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
                <SortOptions/>
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
              {activeOffers.length !== 0 && <Map points={activeOffers} activePoint={hoveredOffer} classMap='cities__map'/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

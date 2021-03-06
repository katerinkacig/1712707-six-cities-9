import SortOptions from '../sort-options/sort-options';
import PlacesList from '../plases-list/places-list';
import {offerOptions} from '../../const';
import Map from '../map/map';
import {useAppSelector} from '../../hooks';
import {getActiveCity, getActiveOffers, getHoveredOffer} from '../../store/offer-process/selectors';

function Cities(): JSX.Element {
  const activeOffers = useAppSelector(getActiveOffers);
  const activeCity = useAppSelector(getActiveCity);
  const hoveredOffer = useAppSelector(getHoveredOffer);

  return (
    <div className="cities">
      <div className={`cities__places-container container ${!activeOffers.length && 'cities__places-container--empty'}`}>
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
          <SortOptions/>
          <PlacesList offerOptions={offerOptions.OFFER_MAIN_OPTIONS}/>
        </section>
        <div className="cities__right-section">
          {activeOffers.length !== 0 && <Map points={activeOffers} activePoint={hoveredOffer} classMap='cities__map'/>}
        </div>
      </div>
    </div>
  );
}

export default Cities;

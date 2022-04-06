import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import Cities from '../../components/cities/cities';
import CitiesEmpty from '../../components/cities-empty/cities-empty';
import {getActiveOffers} from '../../store/offer-process/selectors';

function Main(): JSX.Element {
  const activeOffers = useAppSelector(getActiveOffers);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${!activeOffers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList/>
        {activeOffers.length > 0 ? <Cities/> : <CitiesEmpty/>}
      </main>
    </div>
  );
}

export default Main;

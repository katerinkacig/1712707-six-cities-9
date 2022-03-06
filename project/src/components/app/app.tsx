import Main from '../../pages/main/main';
import {Offer, OfferOptions} from '../../types/offer';
import {City} from '../../types/city';

type AppScreenProps = {
  placesCount: number,
  offers: Offer[],
  offerOptions: OfferOptions,
  city: City,
}

function App({placesCount, offers, offerOptions, city}: AppScreenProps): JSX.Element {
  return <Main placesCount={placesCount} offers={offers} offerOptions={offerOptions} city={city}/>;
}

export default App;

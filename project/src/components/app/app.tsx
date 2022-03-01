import Main from '../../pages/main/main';
import {Offer, OfferOptions} from '../../types/offer';

type AppScreenProps = {
  placesCount: number,
  offers: Offer[],
  offerOptions: OfferOptions,
}

function App({placesCount, offers, offerOptions}: AppScreenProps): JSX.Element {
  return <Main placesCount={placesCount} offers={offers} offerOptions = {offerOptions}/>;
}

export default App;

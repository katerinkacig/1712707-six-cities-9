import Main from '../../pages/main/main';
import {OfferOptions} from '../../types/offer';

type AppScreenProps = {
  offerOptions: OfferOptions
}

function App({offerOptions}: AppScreenProps): JSX.Element {
  return <Main offerOptions={offerOptions}/>;
}

export default App;

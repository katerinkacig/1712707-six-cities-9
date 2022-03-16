import Main from '../../pages/main/main';
import {OfferOptions} from '../../types/offer';
import Spinner from '../spinner/spinner';
import {useAppSelector} from '../../hooks';

type AppScreenProps = {
  offerOptions: OfferOptions
}

function App({offerOptions}: AppScreenProps): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <Spinner/>
    );
  }

  return <Main offerOptions={offerOptions}/>;
}

export default App;

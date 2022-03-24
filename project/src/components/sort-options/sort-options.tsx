import {useState} from 'react';
import Option from '../option/option';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';
import {sortActiveOffersAction} from '../../store/action';
import {SortOption} from '../../const';

function SortOptions ():JSX.Element {
  const dispatch = useAppDispatch();
  const { activeOffers } = useAppSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('Popular');

  const handleOptionClick = (value:string) => {
    setActiveOption(value);
    setIsOpen(!isOpen);
    sort(value);
  };

  const createOption = (value:string) => (
    <Option isActive={activeOption === value} value={value} handleOptionClick={() => {handleOptionClick(value);}}/>
  );

  const sort = (value: string) => {
    const offers = [...activeOffers];

    switch (value) {
      case SortOption.priceAsc:
        offers.sort((a:Offer, b:Offer) => (a.price > b.price ? 1 : -1));
        break;
      case SortOption.priceDesc:
        offers.sort((a:Offer, b:Offer) => (a.price > b.price ? -1 : 1));
        break;
      case SortOption.ratingDesc:
        offers.sort((a:Offer, b:Offer) => (a.rating > b.rating ? -1 : 1));
        break;
      default:
        offers.sort((a:Offer, b:Offer) => (a.id > b.id ? 1 : -1));
    }

    dispatch(sortActiveOffersAction(offers));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => {setIsOpen(!isOpen);}}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Object.values(SortOption).map((value) => createOption(value))}
      </ul>
    </form>
  );
}

export default SortOptions;
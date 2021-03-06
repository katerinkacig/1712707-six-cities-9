import {useEffect, useState} from 'react';
import Option from '../option/option';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';
import {sortActiveOffersAction} from '../../store/offer-process/offer-process';
import {SortOption} from '../../const';
import {getActiveCity, getActiveOffers} from '../../store/offer-process/selectors';

function SortOptions ():JSX.Element {
  const dispatch = useAppDispatch();
  const activeOffers = useAppSelector(getActiveOffers);
  const activeCity = useAppSelector(getActiveCity);
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(SortOption.Popular as string);

  const handleOptionClick = (value:string) => {
    setActiveOption(value);
    setIsOpen(!isOpen);
    sort(value);
  };

  const createOption = (value:string, index:number) => (
    <Option key={index} isActive={activeOption === value} value={value} handleOptionClick={() => {handleOptionClick(value);}}/>
  );

  const sort = (value: string) => {
    const offers = [...activeOffers];

    switch (value) {
      case SortOption.PriceAsc:
        offers.sort((a:Offer, b:Offer) => (a.price > b.price ? 1 : -1));
        break;
      case SortOption.PriceDesc:
        offers.sort((a:Offer, b:Offer) => (a.price > b.price ? -1 : 1));
        break;
      case SortOption.RatingDesc:
        offers.sort((a:Offer, b:Offer) => (a.rating > b.rating ? -1 : 1));
        break;
      default:
        offers.sort((a:Offer, b:Offer) => (a.id > b.id ? 1 : -1));
    }

    dispatch(sortActiveOffersAction(offers));
  };

  useEffect(() => {
    setActiveOption(SortOption.Popular);
  }, [activeCity]);

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
        {Object.values(SortOption).map((value, index) => createOption(value, index))}
      </ul>
    </form>
  );
}

export default SortOptions;

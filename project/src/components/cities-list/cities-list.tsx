import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCityAction} from '../../store/offer-process/offer-process';


function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const {activeCity, cities} = useAppSelector(({OFFERS}) => OFFERS);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city,id) => {
              const keyValue = `${id}-${city}`;
              return(
                <li className="locations__item" key={keyValue}>
                  <a
                    className={`locations__item-link tabs__item ${activeCity === city  ? 'tabs__item--active' : ''}`}
                    href="#todo"
                    onClick={() => {
                      dispatch(changeCityAction(city));
                    }}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;

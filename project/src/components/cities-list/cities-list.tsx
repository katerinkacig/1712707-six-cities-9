import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCityAction} from '../../store/offer-process/offer-process';
import {getActiveCity, getCities} from '../../store/offer-process/selectors';


function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getActiveCity);
  const cities = useAppSelector(getCities);

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
                    href="# "
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

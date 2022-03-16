import {useAppSelector, useAppDispatch} from '../../hooks';
import {City} from '../../types/offer';
import {changeCityAction} from '../../store/action';

type CitiesListProps = {
  cities: City[],
}


function CitiesList({cities}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.activeCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city,id) => {
              const keyValue = `${id}-${city.name}`;
              return(
                <li className="locations__item" key={keyValue}>
                  <a
                    className={`locations__item-link tabs__item ${active.name === city.name  ? 'tabs__item--active' : ''}`}
                    href="#todo"
                    onClick={() => {
                      dispatch(changeCityAction(city));
                    }}
                  >
                    <span>{city.name}</span>
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

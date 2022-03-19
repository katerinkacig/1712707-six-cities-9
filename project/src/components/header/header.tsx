import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

type HeaderProps = {
  isLoginPage?: boolean,
}

function Header({isLoginPage}:HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isLoginPage &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {(authorizationStatus === AuthorizationStatus.Auth) &&
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>}
                <li className="header__nav-item">
                  {(authorizationStatus === AuthorizationStatus.Auth) &&
                  <Link
                    className="header__nav-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                    to={AppRoute.Root}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>}
                  {(authorizationStatus === AuthorizationStatus.NoAuth) &&
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign In</span>
                  </Link>}
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;

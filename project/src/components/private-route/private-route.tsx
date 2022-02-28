import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatus;
}>

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth ? children as JSX.Element : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;


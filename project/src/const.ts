export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  NearOffers = '/nearby',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const URL_MARKER = 'img/pin.svg';

export const URL_ACTIVE_MARKER = 'img/pin-active.svg';

export const cities = [
  { name: 'Paris' },
  { name: 'Cologne' },
  { name: 'Brussels' },
  { name: 'Amsterdam' },
  { name: 'Hamburg' },
  { name: 'Dusseldorf' },
];

export enum SortOption {
  popular = 'Popular',
  priceAsc = 'Price: low to high',
  priceDesc = 'Price: high to low',
  ratingDesc = 'Top rated first',
}

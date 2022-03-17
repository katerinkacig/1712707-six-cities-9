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
}

export const URL_MARKER = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const cities = [
  { name: 'Paris' },
  { name: 'Cologne' },
  { name: 'Brussels' },
  { name: 'Amsterdam' },
  { name: 'Hamburg' },
  { name: 'Dusseldorf' },
];

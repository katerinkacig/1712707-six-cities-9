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

export enum SortOption {
  popular = 'Popular',
  priceAsc = 'Price: low to high',
  priceDesc = 'Price: high to low',
  ratingDesc = 'Top rated first',
}

export enum Comment {
  minLength = 50,
  maxLength = 300,
}

export enum NameSpace {
  user = 'USER',
  offer = 'OFFERS',
  nearOffer = 'NEAR_OFFERS',
  review = 'REVIEW',
}

export const URL_MARKER = 'img/pin.svg';

export const URL_ACTIVE_MARKER = 'img/pin-active.svg';

export const CITIES = [ 'Paris' , 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];


export const offerOptions = {
  OFFER_MAIN_OPTIONS: {
    imgSize: {
      width: '260',
      height: '200',
    },
    placeCardImgWrapClass: 'cities__image-wrapper',
    placeCardClass: 'cities__place-card',
  },
  OFFER_FAVOURITES_OPTIONS: {
    imgSize: {
      width: '150',
      height: '110',
    },
    placeCardImgWrapClass: 'favorites__image-wrapper',
    placeCardClass: 'favorites__card',
    placeCardInfoClass: 'favorites__card-info',
  },
  OFFER_NEAR_OPTIONS: {
    imgSize: {
      width: '260',
      height: '200',
    },
    placeCardImgWrapClass: 'near-places__image-wrapper',
    placeCardClass: 'near-places__card',
  },
};

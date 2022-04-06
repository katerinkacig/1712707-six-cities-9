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
  FavoriteOffers = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum HttpCode {
  Unauthorized = 401,
}

export enum SortOption {
  Popular = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  RatingDesc = 'Top rated first',
}

export enum Comment {
  MinLength = 50,
  MaxLength = 300,
}

export enum NameSpace {
  Error = 'ERROR',
  User = 'USER',
  Offer = 'OFFERS',
  NearOffer = 'NEAR_OFFERS',
  FavoriteOffer = 'FAVORITE_OFFERS',
  Review = 'REVIEW',
}

export const URL_MARKER = 'img/pin.svg';

export const URL_ACTIVE_MARKER = 'img/pin-active.svg';

export const CITIES = [ 'Paris' , 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

export const bookmarkButtonOptions = {
  PLACE_CARD_OPTIONS: {
    classButton: 'place-card',
    btnSize: {
      width: '18',
      height: '19',
    },
  },
  ROOM_OPTIONS: {
    classButton: 'property',
    btnSize: {
      width: '31',
      height: '33',
    },
  },
};

export const REVIEWS_COUNT = 10;

export const OFFER_GALLERY_IMAGES_COUNT = 6;

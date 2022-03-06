export type Offer = {
  id: number,
  srcPreview: string,
  images: string[],
  name: string,
  type: string,
  price: number,
  rating: number,
  premium: boolean,
  favorites: boolean,
  bedrooms: string,
  maxAdults: number,
  properties: string[],
  host: Host,
  reviews?: OfferReview[],
  coordinates: Coordinates,
}

export type Host = {
  src: string,
  name: string,
  description: string,
  pro: boolean
}

export type OfferReview = {
  src: string,
  name: string,
  rating: 80,
  date: string,
  text: string,
}

export type OfferOptions = {
  imgSize: {
    width: string,
    height: string
  },
  placeCardImgWrapClass: string,
  placeCardClass: string,
  placeCardInfoClass?: string,
}

export type Coordinates = {
  lat: number,
  lng: number
}

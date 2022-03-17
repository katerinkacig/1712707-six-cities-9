export type City = {
  location?: Location
  name: string,
}

export type Location ={
  latitude: number,
  longitude: number,
  zoom: number,
}

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Offer = {
    bedrooms: number,
    city: City,
    description: string,
    goods: string[],
    host: Host,
    id: number,
    images: string[],
    isFavorite: boolean,
    isPremium: boolean,
    location: Location,
    maxAdults: number,
    previewImage: string,
    price: number,
    rating: number,
    title: string,
    type: string,
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

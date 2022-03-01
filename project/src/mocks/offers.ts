import {Offer} from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    srcPreview: 'img/apartment-01.jpg',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 80,
    premium: true,
    favorites: false,
    bedrooms: '3 Bedrooms',
    maxAdults: 3,
    properties: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      src: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      pro: true,
    },
    reviews: [
      {
        src: 'img/avatar-max.jpg',
        name: 'Max',
        rating: 80,
        date: 'April 2019',
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      },
    ],
  },
  {
    id: 2,
    srcPreview: 'img/room.jpg',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    name: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating: 80,
    premium: false,
    favorites: true,
    bedrooms: '3 Bedrooms',
    maxAdults: 2,
    properties: ['Wi-Fi', 'Washing machine', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      src: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      pro: false,
    },
  },
  {
    id: 3,
    srcPreview: 'img/apartment-02.jpg',
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 80,
    premium: false,
    favorites: true,
    bedrooms: '3 Bedrooms',
    maxAdults: 3,
    properties: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Fridge'],
    host: {
      src: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      pro: false,
    },
  },
  {
    id: 4,
    srcPreview: 'img/apartment-03.jpg',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 80,
    premium: true,
    favorites: false,
    bedrooms: '3 Bedrooms',
    maxAdults: 4,
    properties: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      src: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      pro: true,
    },
  },
];

export function getOfferById(id:number | string | undefined):Offer | undefined {
  if (!id) {
    return undefined;
  }
  return offers.find((offer) => offer.id === +id);
}

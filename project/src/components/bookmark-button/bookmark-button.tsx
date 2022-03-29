import React, {useEffect, useState} from 'react';
import {changeFavoriteOfferAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';
import {BookmarkButtonOptions} from '../../types/bookmark-button';

type BookmarkButtonProps = {
  offer: Offer,
  options: BookmarkButtonOptions,
}

function BookmarkButton({offer, options}:BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { favoriteOffers } = useAppSelector(({FAVORITE_OFFERS}) => FAVORITE_OFFERS);
  const [isActive, setIsActive] = useState(offer.isFavorite);
  useEffect(() => {
    setIsActive(favoriteOffers.some((favoriteOffer) => favoriteOffer.id === offer.id));
  }, [favoriteOffers]);
  const handleButtonClick = () =>{
    const newStatus = !isActive;
    dispatch(changeFavoriteOfferAction({hotelId: offer.id, status: +newStatus }));
  };
  return (
    <button
      className={`${options.classButton}__bookmark-button ${(isActive) ? `${options.classButton}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${options.classButton}__bookmark-icon`} width={options.btnSize.width} height={options.btnSize.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;

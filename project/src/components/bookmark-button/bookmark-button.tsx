import React from 'react';
import {useNavigate} from 'react-router-dom';
import {changeFavoriteOfferAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Offer} from '../../types/offer';
import {BookmarkButtonOptions} from '../../types/bookmark-button';
import {AppRoute, AuthorizationStatus} from '../../const';

type BookmarkButtonProps = {
  offer: Offer,
  options: BookmarkButtonOptions,
}

function BookmarkButton({offer, options}:BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const navigate = useNavigate();

  const handleButtonClick = () =>{
    if(authorizationStatus === AuthorizationStatus.NoAuth) {navigate(AppRoute.Login, { replace: true });}
    const newStatus = !offer.isFavorite;
    dispatch(changeFavoriteOfferAction({hotelId: offer.id, status: +newStatus }));
  };
  return (
    <button
      className={`${options.classButton}__bookmark-button ${offer.isFavorite ? `${options.classButton}__bookmark-button--active` : ''} button`}
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

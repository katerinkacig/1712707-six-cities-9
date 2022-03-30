import {ChangeEvent} from 'react';

type RatingStarProps = {
  title: string
  index: number,
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  checked: boolean,
  disabled: boolean
}

function RatingStar({title, index, checked, disabled, onChangeHandler}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        checked={checked}
        onChange={onChangeHandler}
        value={index}
        id={`${index}-stars`}
        type="radio"
        disabled={disabled}
      />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
export default RatingStar;

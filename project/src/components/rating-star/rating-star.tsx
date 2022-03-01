type RatingStarProps = {
  title: string
  index: number,
  onChangeHandler: any
}

function RatingStar({title, index, onChangeHandler}: RatingStarProps): JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" onChange={onChangeHandler} value={index} id={`${index}-stars`} type="radio"/>
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
export default RatingStar;

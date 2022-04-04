import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import RatingStar from '../rating-star/rating-star';
import { useAppDispatch } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { Comment } from '../../const';

type ReviewsFormProps = {
  offerId: number,
}

function ReviewsForm({ offerId }:ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLTextAreaElement|HTMLInputElement>) => {
    const { value } = evt.target;
    setFormData({
      ...formData,
      [evt.target.name]: (evt.target.name === 'rating' ? +value : value),
    });
  };

  useEffect(() => {
    const { comment, rating } = formData;
    setDisableSubmit(!(comment.length >= Comment.MinLength && rating > 0));
  }, [formData]);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setDisable(true);
    const result = await dispatch(addReviewAction({hotelId: offerId, comment: formData}));
    setDisable(false);
    if (result?.payload !== 'error') {
      setFormData({comment: '', rating: 0});
    }
  };

  return (
    <form className="reviews__form form" action="" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {['terribly', 'badly', 'not bad', 'good','perfect'].map((title, index) => {
          const keyValue = `${index}-${title}`;
          const realIndex = index + 1;
          return (
            <RatingStar
              key={keyValue}
              title={title}
              index={realIndex}
              checked={formData.rating === realIndex}
              disabled={disable}
              onChangeHandler={handleFieldChange}
            />
          );
        }).reverse()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        onChange={handleFieldChange}
        value={formData.comment}
        minLength={Comment.MinLength}
        maxLength={Comment.MaxLength}
        disabled={disable}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disableSubmit || disable}>Submit</button>
      </div>
    </form>
  );
}
export default ReviewsForm;

import React from 'react';
import {useAppSelector} from '../../hooks';
import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/review';
import {REVIEWS_COUNT} from '../../const';
import {getReviews} from '../../store/reviews-process/selectors';

function ReviewsList():JSX.Element{
  const reviews = useAppSelector(getReviews);
  return (
    <ul className="reviews__list">
      {[...reviews]
        .sort((a:Review, b:Review) => (a.date > b.date ? -1 : 1))
        .slice(0, REVIEWS_COUNT)
        .map((review, id) => {
          const keyValue = `review-${id}`;
          return <ReviewItem key={keyValue} review={review}/>;
        })}
    </ul>
  );
}
export default ReviewsList;

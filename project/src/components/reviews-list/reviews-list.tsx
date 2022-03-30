import React from 'react';
import {useAppSelector} from '../../hooks';
import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/review';

function ReviewsList():JSX.Element{
  const { reviews } = useAppSelector(({REVIEW}) => REVIEW);
  return (
    <ul className="reviews__list">
      {[...reviews]
        .sort((a:Review, b:Review) => (a.date > b.date ? -1 : 1))
        .slice(0, 10)
        .map((review, id) => {
          const keyValue = `review-${id}`;
          return <ReviewItem key={keyValue} review={review}/>;
        })}
    </ul>
  );
}
export default ReviewsList;

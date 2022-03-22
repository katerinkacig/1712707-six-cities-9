import React from 'react';
import {useAppSelector} from '../../hooks';
import ReviewItem from '../review-item/review-item';

function ReviewsList():JSX.Element{
  const { reviews } = useAppSelector((state) => state);
  return (
    <ul className="reviews__list">
      {reviews.map((review, id) => {
        const keyValue = `review-${id}`;
        return <ReviewItem key={keyValue} review={review}/>;
      })}
    </ul>
  );
}
export default ReviewsList;

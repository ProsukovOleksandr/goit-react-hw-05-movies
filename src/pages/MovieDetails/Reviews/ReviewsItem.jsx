export const ReviewsItem = ({ review }) => {
  const { author,content} = review;
  return (
    <li>
      <h4>Author: {author}</h4>
      <p>{content}</p>
    </li>
  );
};

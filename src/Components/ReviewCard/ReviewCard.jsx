const ReviewCard = ({ review }) => {
  const { name, comment, imageURl } = review;
  return (
    <div className="flex items-center">
      <div className="avatar">
        <div className="w-20 h-20 rounded">
          <img src={imageURl} alt="Tailwind-CSS-Avatar-component" />
        </div>
      </div>
      <div className="ms-3">
      <p className="font-bold">{name}</p>
      <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

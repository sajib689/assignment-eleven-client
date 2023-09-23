import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ReviewCard from "../ReviewCard/ReviewCard";

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/reviews?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
          });
      }, [user.email]);
    return (
        <div className="w-96">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    );
};

export default MyReviews;
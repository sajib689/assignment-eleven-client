import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ReviewCard from "../ReviewCard/ReviewCard";
import MyReviewsCard from "../MyReviewsCard/MyReviewsCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user.email]);
  return (
    <>
      <div className="overflow-x-auto m-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="mt-20">
            {reviews.map((review) => (
              <MyReviewsCard key={review._id} review={review}></MyReviewsCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyReviews;

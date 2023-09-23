import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ReviewCard from "../ReviewCard/ReviewCard";
import MyReviewsCard from "../MyReviewsCard/MyReviewsCard";
import Swal from "sweetalert2";

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
  const handleDelete = _id => {
    fetch(`http://localhost:3000/reviews/${_id}`,{
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged === true) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Delete Success',
                showConfirmButton: false,
                timer: 1500
              })
        }
        const remaining = reviews.filter(review => review._id !== _id)
        setReviews(remaining)
    })
.catch(error => {
    if(error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
         })
    }
})
  }
  return (
    <>
      <div className="overflow-x-auto m-20 bg-base-200 rounded-lg">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="mt-20">
            {reviews.map((review) => (
              <MyReviewsCard  key={review._id} review={review} handleDelete={handleDelete}></MyReviewsCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyReviews;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyReviewsCard from "../MyReviewsCard/MyReviewsCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://assignment-eleven-server-r1xu.vercel.app/reviews?email=${user?.email}`,{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error) {
          setReviews(data);
        }
        else{
          navigate('/')
        }
      });
  }, [user?.email,navigate]);
  const handleDelete = (_id) => {
    fetch(`https://assignment-eleven-server-r1xu.vercel.app/reviews/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.acknowledged === true) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Delete Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        const remaining = reviews.filter((review) => review._id !== _id);
        setReviews(remaining);
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        }
      });
  };
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
              <MyReviewsCard
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                setReviews={reviews}
              ></MyReviewsCard>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyReviews;

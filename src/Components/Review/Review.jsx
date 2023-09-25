import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Providers/AuthProviders";
import ReviewCard from "../ReviewCard/ReviewCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Review = ({ _id,title }) => {
  const { user,loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate()
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const serviceId = form.serviceId.value;
    const title = form.title.value;
    const email = form.email.value;
    const imageURl = form.imageURl.value;
    const comment = form.comment.value;
    const reviews = { name, email, imageURl, serviceId,title, comment };
    console.log(reviews)
    fetch("https://assignment-eleven-server-r1xu.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
       if(data.acknowledged === true) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Review Success',
            showConfirmButton: false,
            timer: 1500
          })
          window.location.reload()
       }
      }
      );
      form.reset()
      
  };
  useEffect(() => {
    fetch(`https://assignment-eleven-server-r1xu.vercel.app/reviews?email=${user?.email}`,{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error) {
          setReviews(data);
        } else{
          navigate('/')
        }
      });
  }, [user?.email,navigate]);
  return (
    <div className="lg:ps-20 md:ps-10 sm:ps-10  grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-base-200">
      <form onSubmit={handlePost} className="flex flex-col">
        <input
        required
          name="name"
          type="text"
          placeholder="Type here name"
          className="mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          name="serviceId"
          type="text"
          defaultValue={_id}
          className="hidden mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          name="title"
          type="text"
          defaultValue={title}
          className="hidden mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          name="email"
          type="text"
          defaultValue={user?.email}
          className="hidden mb-3 input input-bordered w-full max-w-xs"
        />
        <input
        required
          name="imageURl"
          type="text"
          placeholder="Type here image URL"
          className="mb-3 input input-bordered w-full max-w-xs"
        />
        <textarea
        required
          name="comment"
          type="text"
          placeholder="Type here message"
          className="mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          className="btn max-w-xs text-white bg-[#0178BD] hover:bg-[#0487d3]"
          type="submit"
          value="Post"
        />
      </form>
      <div className="w-96">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Providers/AuthProviders";
import ReviewCard from "../ReviewCard/ReviewCard";

const Review = ({ _id }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const id = form.id.value;
    const email = form.email.value;
    const imageURl = form.imageURl.value;
    const comment = form.comment.value;
    const reviews = { name, email, imageURl, id, comment };
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:3000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user.email]);
  return (
    <div className="ps-20 mt-20 grid grid-cols-2 bg-base-200">
      <form onSubmit={handlePost} className="grid grid-cols">
        <input
          name="name"
          type="text"
          placeholder="Type here name"
          className="mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          name="id"
          type="text"
          defaultValue={_id}
          className="hidden mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          name="email"
          type="text"
          defaultValue={user.email}
          className="hidden mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          name="imageURl"
          type="text"
          placeholder="Type here image URL"
          className="mb-3 input input-bordered w-full max-w-xs"
        />
        <textarea
          name="comment"
          type=""
          placeholder="Type here message"
          className="mb-3 input input-bordered w-full max-w-xs"
        />
        <input
          className="btn max-w-xs text-white bg-[#0178BD] hover:bg-[#0487d3]"
          type="submit"
          value="Post"
        />
      </form>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;

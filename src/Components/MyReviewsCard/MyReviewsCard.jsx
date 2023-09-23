const MyReviewsCard = ({ review }) => {
  const { name, comment, imageURl, title, email } = review;
  return (
    <>
    
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={imageURl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{title}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
      
    </>
  );
};

export default MyReviewsCard;

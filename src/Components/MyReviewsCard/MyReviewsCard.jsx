import { Link } from "react-router-dom";
import del from "../../assets/images/delete.svg";
import edit from "../../assets/images/edit.gif";
import ModalForm from "../ModalForm/ModalForm";
import { useState } from "react";
const MyReviewsCard = ({ review, handleDelete,reviews }) => {
  const { _id, name, comment, imageURl, title, email } = review;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        <td className="w-48">{comment}</td>
        <th className="flex">
          <Link onClick={() => handleDelete(_id)}>
            <img className="bg-red-500 p-1 rounded-lg" src={del} alt="" />
          </Link>
          <div>
            <button
              onClick={openModal}
              className=""
            >
              <Link>
                <img className="w-7 ms-3 rounded-lg" src={edit} alt="" />
              </Link>
            </button>
            <ModalForm setReviews={reviews} comment={comment} _id={_id} isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </th>
      </tr>
    </>
  );
};

export default MyReviewsCard;

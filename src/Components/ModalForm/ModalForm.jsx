import Modal from "react-modal";
import Swal from "sweetalert2";
const ModalForm = ({ isOpen, onRequestClose, comment, _id }) => {
 
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const c = { comment };
    fetch(`http://localhost:3000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(c),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Update Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        window.location.reload();
      });
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="bg-white w-1/2 p-6 mx-auto rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Update Review</h2>
        {/* Your form content */}
        <form onSubmit={handleUpdate}>
          {/* Form fields */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Review
            </label>
            <textarea
              defaultValue={comment}
              type="text"
              id="name"
              name="comment"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* Add more form fields as needed */}
          <div className="mt-4">
            <button
              type="button"
              onClick={onRequestClose}
              className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Close
            </button>
            <button
              type="submit"
              className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalForm;

import React, { useState } from 'react';
import Swal from 'sweetalert2';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend or handle it as needed
   
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    const user = {formData}
    fetch('https://assignment-eleven-server-r1xu.vercel.app/contact',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if (data.acknowledged === true) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-base-200">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>
        <div className="">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

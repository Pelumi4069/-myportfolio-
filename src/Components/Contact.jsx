import React from 'react';

const Contact = () => {
  return (
    <div className="contact bg-gray-400" id='contact'>
      {/* Removed the background image */}
      <div className="rightSide bg-gray-400 p-8 flex flex-col justify-center items-center lg:w-1/2">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <form id="contact-form" method="POST" className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              name="name"
              placeholder="Enter full name..."
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              name="email"
              placeholder="Enter email..."
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primaryDark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

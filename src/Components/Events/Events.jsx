import React from 'react'

import { useState } from 'react'

function Events() {
  
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
      });
    
      const handleInputChange = (event) => {
        /* event.persist(); NO LONGER USED IN v.17*/
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
    
      const [submitted, setSubmitted] = useState(false);
      const [valid, setValid] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName && values.email) {
          setValid(true);
        }
        setSubmitted(true);
      };
    
      return (
        <div className="bg-slate-700 min-h-screen flex flex-col items-center justify-center py-8">
  <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
    {/* Event Header */}
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Event Registration</h2>
    <p className="text-gray-600 text-center mb-8">
      Join us for an exciting event! Please fill out the form below to register.
    </p>

    <form className="register-form" onSubmit={handleSubmit}>
      {submitted && valid && (
        <div className="success-message bg-green-100 border border-green-400 text-green-700 p-4 rounded mb-6">
          <h3 className="font-bold">Welcome, {values.firstName} {values.lastName}!</h3>
          <p>Your registration was successful!</p>
        </div>
      )}

      {!valid && (
        <>
          <div className="mb-4">
            <input
              className="form-field w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
            {submitted && !values.firstName && (
              <span id="first-name-error" className="text-red-500 text-sm">Please enter a first name</span>
            )}
          </div>

          <div className="mb-4">
            <input
              className="form-field w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
            {submitted && !values.lastName && (
              <span id="last-name-error" className="text-red-500 text-sm">Please enter a last name</span>
            )}
          </div>

          <div className="mb-4">
            <input
              className="form-field w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            {submitted && !values.email && (
              <span id="email-error" className="text-red-500 text-sm">Please enter an email address</span>
            )}
          </div>

          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full transition duration-300" type="submit">
            Register
          </button>
        </>
      )}
    </form>
  </div>
</div>

  )
}

export default Events
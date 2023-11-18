import React, { useState } from 'react';

const ControlledForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Update form data when input values change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data (e.g., send to server)
    console.log('Form Data:', formData);

    // You can also clear the form if needed
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ControlledForm;

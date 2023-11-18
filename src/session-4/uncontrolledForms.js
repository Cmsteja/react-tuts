import React, { useRef } from 'react';

const UncontrolledForm = () => {
  // Refs for uncontrolled inputs
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Accessing values using refs
    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;

    // Do something with the values (e.g., send to server)
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);

    // You can also clear the inputs if needed
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" ref={nameInputRef} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" ref={emailInputRef} />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UncontrolledForm;

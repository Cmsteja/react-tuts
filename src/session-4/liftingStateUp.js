import React, { useState } from 'react';

// Child Component
const ChildComponent = ({ value, onValueChange }) => {
  return (
    <div>
      <p>Child Component</p>
      <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)} />
    </div>
  );
};

// Parent Component
const ParentComponentStateUp = () => {
  // State lifted up to the parent component
  const [sharedState, setSharedState] = useState('');

  const handleValueChange = (newValue) => {
    // Update the shared state in the parent component
    setSharedState(newValue);
  };

  return (
    <div>
      <p>Parent Component</p>
      <ChildComponent value={sharedState} onValueChange={handleValueChange} />
      {/* Other components can also access sharedState */}
      <p>Shared State: {sharedState}</p>
    </div>
  );
};

export default ParentComponentStateUp;

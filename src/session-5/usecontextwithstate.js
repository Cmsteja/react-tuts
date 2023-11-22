import React, { useState } from 'react';

const ParentComponent = () => {
  const [value, setValue] = useState('Default Value');

  return (
    <div>
      <ChildComponent value={value} setValue={setValue} />
    </div>
  );
};

const ChildComponent = ({ value, setValue }) => {
  return (
    <div>
      <GrandchildComponent value={value} setValue={setValue} />
    </div>
  );
};

const GrandchildComponent = ({ value, setValue }) => {
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('New Value')}>Update Value</button>
    </div>
  );
};

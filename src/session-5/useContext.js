import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Default Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('New Value')}>Update Value</button>
    </div>
  );
};

const HookContext = () => {
  return (
    <MyProvider>
      <div>
        <ChildComponent />
      </div>
    </MyProvider>
  );
};

export default HookContext;
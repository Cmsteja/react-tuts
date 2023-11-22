import React, { useState, useMemo, useCallback } from 'react';

const HookCM = () => {
  // State variables
  const [count, setCount] = useState(0);

  // Memoized value using useMemo
  const squaredCount = useMemo(() => {
    console.log('Calculating squared count');
    return count * count;
  }, [count]);

  // Callback function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Count: {squaredCount}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default HookCM;

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Usage
function UseAsyncTest() {
  const { execute, status, value, error } = useAsync(myAxios, false);
  return (
    <div>
      {status === 'idle' && <div>Start your journey by clicking a button</div>}
      {status === 'success' && <div>{value.id}</div>}
      {status === 'error' && <div>{error}</div>}
      <button onClick={execute} disabled={status === 'pending'}>
        {status !== 'pending' ? 'Click me' : 'Loading...'}
      </button>
    </div>
  );
}

const myAxios = () => {
  return axios({
    url: 'https://jsonplaceholder.typicode.com/todos/11',
  });
};

// Hook
const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);
    return asyncFunction()
      .then((response) => {
        console.log(response.data);
        setValue(response.data);
        setStatus('success');
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setStatus('error');
      });
  }, [asyncFunction]);
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, value, error };
};
export default UseAsyncTest;

import { useEffect } from 'react';

const ClearLocalStorage = () => {
  useEffect(() => {
    // Clear local storage
    localStorage.clear();
    console.log('Local storage cleared.');
  }, []);

  return (
    <div>
      <h1>Local Storage Cleared</h1>
    </div>
  );
};

export default ClearLocalStorage;
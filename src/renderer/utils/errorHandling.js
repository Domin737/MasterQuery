// src/renderer/utils/errorHandling.js
export const handleError = (error) => {
    console.error(error);
    alert(`Error: ${error.message}`);
  };
  
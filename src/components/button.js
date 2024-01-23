import React from 'react';

function CustomButton({ buttonText }) {
  return (
    <button className="bg-black text-white py-2 px-4 rounded">
      {buttonText}
    </button>
  );
}

export default CustomButton;

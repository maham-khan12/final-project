import React from 'react';

const TotalDisplay = ({ totalAmount }) => {
  return (
    <div>
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default TotalDisplay;

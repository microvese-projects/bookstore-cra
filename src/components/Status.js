import React from 'react';

function Status() {
  const progress = 64;
  return (
    <div className="status">
      <div className="circle-container">
        <div className="circle" style={{ '--value': progress }} />
      </div>
      <div className="stats">
        <p className="percentage">64%</p>
        <p className="completed">Completed</p>
      </div>
    </div>
  );
}

export default Status;

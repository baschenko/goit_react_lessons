import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Уменьшить на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Увеличить на 1
      </button>
    </div>
  );
};

export default Controls;

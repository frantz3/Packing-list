import React from "react";
import './index.css';

function Stats({ items }) {
    if (!items.length) {
      return (
        <p className="stats">
          <em>Start adding some items to your packing list</em>
        </p>
      );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
  
    return (
      <footer className="stats">
        {percentage === 100
          ? "You got everything! Ready to go"
          : `You have ${numItems} items on your list, and you have packed ${numPacked} items (${percentage}%) `}
      </footer>
    );
  }
  

export default Stats
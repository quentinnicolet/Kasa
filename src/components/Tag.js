import React from 'react';
import '../styles/Tag.css';

function Tags({ tags }) {
      return (
            <div>
                  {tags.map((tag) => (
                        <span>{tag}</span>
                  ))}
            </div>
      );
}

export default Tags;


import React from 'react';

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

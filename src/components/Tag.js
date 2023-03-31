import React from 'react';
import '../styles/Tag.css';

function Tags({ tags }) {
      return (
            <div id='container-tag'>
                  {tags.map((tag) => (
                        <span>{tag}</span>
                  ))}
            </div>
      );
}

export default Tags;

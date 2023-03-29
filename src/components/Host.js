import React from 'react';

function Host(props) {
      return (
            <div>
                  <h2>{props.host.name}</h2>
                  <img src={props.host.picture} alt={props.host.name} />
            </div>
      );
}

export default Host;
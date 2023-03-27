import React from "react";

function Host({ host }) {
  const [name, lastname] = host.name.split(" ");

  return (
    <div className="host">
      <div className="host-name">
        <p className="host-firstname">{name.trim()}</p>
        <p className="host-lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="host-picture" />
    </div>
  );
}

export default Host;
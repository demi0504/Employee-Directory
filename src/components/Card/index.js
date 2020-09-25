import React from "react";
import "./style.css";

function Card(props) {
  console.log(props.name);
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="info">
          <ul>
            <li>
              Name: {props.name}
            </li>
            <li>
              Email: {props.email}
            </li>
            <li>
              Phone: {props.phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
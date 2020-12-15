import React, { useState } from "react";
import "./Float.scss";

export default function Float() {
  const [float, setFloat] = useState();

  return (
    <div className="float-main">
      <div className="float-introduction">
        <h1>Float</h1>
        <p>
          The float property in CSS causes an element to float to either the
          left or right side of its container, allowing other elements to wrap
          around it. It is removed from the normal flow of the page.
        </p>
      </div>
      <div className="float-practice">
        <div className="float-property">
          <h2>
            Give the image on the right a float property and see what happens.
          </h2>
          <div className="float-input-div">
            <label className="float-label">Float:</label>
            <select value={float} onChange={(e) => setFloat(e.target.value)}>
              <option value="none">None</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
        <div className="float-practice-example">
          <img
            className="float-practice-image"
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/floating-feather-don-farrall.jpg"
            style={{ float: `${float}` }}
          />
          <p className="float-practice-description">
            Watch this feather float!
          </p>
        </div>
      </div>
    </div>
  );
}

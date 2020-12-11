import React, { useState } from "react";
import "./Float.scss";

export default function Float() {

    const [float, setFloat] = useState();

    return (
        <div><div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Float</h2>
          <p style={{ width: "90%" }}>
            The float property in CSS causes an element to float to either the
            left or right side of its container, allowing other elements to wrap
            around it. It is removed from the normal flow of the page.
          </p>
          <label>Float:</label>
          <select
            value={float}
            onChange={(e) => setFloat(e.target.value)}
            style={{ marginBottom: "10px" }}
          >
            <option value="none">None</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div style={{ width: "55%" }}>
          <img
            src="data:image/jpeg;base64,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"
            style={{ width: "200px", height: "200px", float: `${float}` }}
          />
          <p>Give the feather a float property and see what happens!</p>
        </div>
      </div>
    )
}
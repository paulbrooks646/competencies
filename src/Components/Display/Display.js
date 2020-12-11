import React, { useState } from "react";
import "./Display.scss";

export default function Display() {

    const [display, setDisplay] = useState();

    return (
      <div>
      
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <h2>Display</h2>
          <p style={{ width: "90%" }}>
            In CSS, the display property specifies the display behavior of an
            element. The inline value displays the element inline and negates
            all height and width properties. The block value displays the
            element as a block element, it will start on a new line and take up
            the entire width. The contents value makes the container disappear
            displaying only the contents inside. It moves any children element a
            level up in the DOM. Inline-block is displayed like an inline
            element but is able to receive height and width values. Display none
            removes the element along with its children. The Flex and Grid
            values will be explained in their own section.
          </p>
          <label style={{}}>Span 2 Display:</label>
          <select
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
            style={{ marginBottom: "10px", marginTop: "0px" }}
          >
            <option value="inline">Inline</option>
            <option value="block">Block</option>
            <option value="contents">Contents</option>
            <option value="inline-block">Inline Block</option>
            <option value="none">None</option>
          </select>
        </div>
        <div style={{ width: "60%", position: "relative", top: "33%" }}>
          <div>
            <span style={{ marginRight: "10px" }}>Span 1</span>
            <span
              style={{
                display: `${display}`,
                backgroundColor: "red",
                border: "solid 1px black",
                marginRight: "10px",
              }}
            >
              Span 2
            </span>
            <span>Span 3</span>
          </div>
          <p style={{ position: "relative", top: "20%" }}>
            Look what happens when you give Span 2 different display values.
          </p>
        </div>
      </div>
    );
}
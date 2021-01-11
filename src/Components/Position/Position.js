import React, { useState } from "react";
import "./Position.scss";

export default function Position() {
  const [boxOne, setBoxOne] = useState("static");
  const [topOne, setTopOne] = useState("0px");
  const [rightOne, setRightOne] = useState("0px");
  const [bottomOne, setBottomOne] = useState("0px");
  const [leftOne, setLeftOne] = useState("0px");
  const [zOne, setZOne] = useState(0);
  const [relativeCard, setRelativeCard] = useState();
  const [fixedCard, setFixedCard] = useState();
  const [absoluteCard, setAbsoluteCard] = useState();
  const [stickyCard, setStickyCard] = useState();
  const [staticCard, setStaticCard] = useState();

  function toggleRelativeCard() {
    setRelativeCard(!relativeCard);
  }

  function toggleFixedCard() {
    setFixedCard(!fixedCard);
  }

  function toggleAbsoluteCard() {
    setAbsoluteCard(!absoluteCard);
  }

  function toggleStickyCard() {
    setStickyCard(!stickyCard);
  }

  function toggleStaticCard() {
    setStaticCard(!staticCard);
  }

  return (
    <div className="position-main">
      <div className="position-introduction">
        <h1 className="position-title">Position</h1>
        <p className="position-description">
          The position property specifies the method of positioning used for an
          element. There are five different poistion values: Static, Relative,
          Fixed, Absolute and Sticky. Once an element has a position assigned
          (unless that position is static) it gains access to the Top, Right,
          Bottom and Left positioning properties. You can use different
          measurements for the properties including percentage of parent
          element, for today's purposes we will be using pixels. Static
          positioning is the default for all elements and is always positioned
          according to the normal flow of the page. If elements overlap
          whichever one has a higher z-index appears on top, if elements have
          the same z-index whichever one comes later in the code will appear on
          top. You can assign an element a z-index by using the z-index
          property.{" "}
        </p>
      </div>
      <div className="position-practice-div">
        <div className="position-practice">
          <div
            className="position-practice-box"
            style={{
              position: boxOne,
              top: `${topOne}px`,
              right: `${rightOne}px`,
              bottom: `${bottomOne}px`,
              left: `${leftOne}px`,
              zIndex: zOne,
            }}
          >
            Box 1
          </div>
        </div>
        <div className="position-properties" style={{ width: "100%", display: "flex", marginBottom: "20px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>Relative</h2>
            <p style={{ width: "90%" }}>
              When an element has relative positioining, using the Top, Right,
              Bottom and Left properties will adjust it from where it would
              normally be positioned.
            </p>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4>Box 1</h4>
            <label>Position:</label>
            <select
              value={boxOne}
              onChange={(e) => setBoxOne(e.target.value)}
              style={{ marginBottom: "10px" }}
            >
              <option value="static">Static</option>
              <option value="relative">Relative</option>
              <option value="fixed">Fixed</option>
              <option value="absolute">Absolute</option>
              <option value="sticky">Sticky</option>
            </select>
            <div>
              <label style={{ marginRight: "10px" }}>Top:</label>
              <input
                placeholder="Type number here"
                onChange={(e) => setTopOne(e.target.value)}
              />
            </div>
            <div>
              <label style={{ marginRight: "10px" }}>Right:</label>
              <input
                placeholder="Type number here"
                onChange={(e) => setRightOne(e.target.value)}
              />
            </div>
            <div>
              <label style={{ marginRight: "10px" }}>Bottom:</label>
              <input
                placeholder="Type number here"
                onChange={(e) => setBottomOne(e.target.value)}
              />
            </div>
            <div>
              <label style={{ marginRight: "10px" }}>Left:</label>
              <input
                placeholder="Type number here"
                onChange={(e) => setLeftOne(e.target.value)}
              />
            </div>
            <div>
              <label style={{ marginRight: "10px" }}>Z-index:</label>
              <input
                placeholder="Type number here"
                onChange={(e) => setZOne(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", marginBottom: "20px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>Fixed</h2>
            <p style={{ width: "90%" }}>
              When an element has fixed positioning using the Top, Right,
              Bottom, and Left properties positions it relative to the viewport.
              This means it stays in the same place even when the page is
              scrolled.
            </p>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", marginBottom: "20px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>Absolute</h2>
            <p style={{ width: "90%" }}>
              An element with absolute positioning is positioned relative to its
              nearest positioned ancestor when using Top, Right, Bottom, or
              Left.
            </p>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", marginBottom: "20px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2>Sticky</h2>
            <p style={{ width: "90%" }}>
              {" "}
              Sticky positioining is a transitions from position relative to
              position fixed depending on the scroll position. Once the element
              reaches a specific position on the viewport it becomes 'sticky'
              and stays in its same position relative to the view port unti it
              reaches the bottom of its container.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

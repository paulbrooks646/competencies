import React, { useState } from "react";
import "./Display.scss";
import { Link } from "react-router-dom";

export default function Display() {
  const [display, setDisplay] = useState();
  const [inlineCard, setInlineCard] = useState(false);
  const [blockCard, setBlockCard] = useState(false);
  const [contentsCard, setContentsCard] = useState(false);
  const [inlineBlockCard, setInlineBlockCard] = useState(false);
  const [tableCard, setTableCard] = useState(false);
  const [noneCard, setNoneCard] = useState(false);

  function toggleInlineCard() {
    setInlineCard(!inlineCard);
  }

  function toggleBlockCard() {
    setBlockCard(!blockCard);
  }

  function toggleContentsCard() {
    setContentsCard(!contentsCard);
  }

  function toggleInlineBlockCard() {
    setInlineBlockCard(!inlineBlockCard);
  }

  function toggleTableCard() {
    setTableCard(!tableCard);
  }

  function toggleNoneCard() {
    setNoneCard(!noneCard);
  }

  return (
    <div className="display-main">
      <div className="display-introduction">
        <div className="display-description-div">
          <h1 className="display-title">Display</h1>
          <p className="display-description">
            In CSS, the display property, as its name suggest, specifies how an
            element will be displayed. There are a lot of potential values for
            the display property. For more information on the flex value, please
            visit our <Link to="/Flexbox">Flexbox</Link> page. For more
            information on the grid value, please visit our{" "}
            <Link to="Grid">Grid</Link> page. Otherwise click on any of the
            properties on the right for more information.
          </p>
        </div>
        <div className="display-value-div">
          <h2 className="display-value" onClick={() => toggleInlineCard()}>
            Inline
          </h2>
          <h2 className="display-value" onClick={() => toggleBlockCard()}>
            Block
          </h2>
          <h2 className="display-value" onClick={() => toggleContentsCard()}>
            Contents
          </h2>
          <h2 className="display-value" onClick={() => toggleInlineBlockCard()}>
            Inline Block
          </h2>
          <h2 className="display-value" onClick={() => toggleTableCard()}>
            Table
          </h2>
          <h2 className="display-value" onClick={() => toggleNoneCard()}>
            None
          </h2>
        </div>
      </div>
      <div className="display-practice-div">
        <div className="display-practice-properties">
          <label style={{}}>Span 2 Display:</label>
          <select
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
          >
            <option value="inline">Inline</option>
            <option value="block">Block</option>
            <option value="contents">Contents</option>
                      <option value="inline-block">Inline Block</option>
                      <option value="table">Table</option>
            <option value="none">None</option>
          </select>
        </div>

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
          <div className={`${inlineCard ? "display-card" : "display-card-closed"}`}>
              <h2 className="display-card-title">Inline</h2>
              <p className="display-card-description"></p>
              <button className="display-card-button" onClick={() => toggleInlineCard()}>CLOSE</button></div>
          <div className={`${blockCard ? "display-card" : "display-card-closed"}`}>
              <h2 className="display-card-title">Block</h2>
              <p className="display-card-description"></p>
              <button className="display-card-button" onClick={() => toggleBlockCard()}>CLOSE</button></div><div className={`${contentsCard ? "display-card" : "display-card-closed"}`}>
              <h2 className="display-card-title">Contents</h2>
              <p className="display-card-description"></p>
              <button className="display-card-button" onClick={() => toggleContentsCard()}>CLOSE</button></div><div className={`${inlineBlockCard ? "display-card" : "display-card-closed"}`}>
              <h2 className="display-card-title">Inline Block</h2>
              <p className="display-card-description"></p>
              <button className="display-card-button" onClick={() => toggleInlineBlockCard()}>CLOSE</button></div><div className={`${tableCard ? "display-card" : "display-card-closed"}`}>
              <h2 className="display-card-title">Table</h2>
              <p className="display-card-description"></p>
              <button className="display-card-button" onClick={() => toggleTableCard()}>CLOSE</button></div><div className={`${noneCard ? "display-card" : "display-card-closed"}`}>
              <h2 className="display-card-title">None</h2>
              <p className="display-card-description"></p>
              <button className="display-card-button" onClick={() => toggleNoneCard()}>CLOSE</button></div>
      <p>
        of ourThe potential display values are Flex, Inline, Inline Block,
        Block, Contents, and none. For more information on Flex, please visit
        our page. The inline value displays the element inline and negates all
        height and width properties. The block value displays the element as a
        block element, it will start on a new line and take up the entire width.
        The contents value makes the container disappear displaying only the
        contents inside. It moves any children element a level up in the DOM.
        Inline-block is displayed like an inline element but is able to receive
        height and width values. Display none removes the element along with its
        children. The Flex and Grid values will be explained in their own
        section.
      </p>
    </div>
  );
}

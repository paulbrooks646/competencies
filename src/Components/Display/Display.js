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
                  <h2>Give Span 2 different display values and see what happens.</h2>
          <label className="display-label">Display:</label>
          <select value={display} onChange={(e) => setDisplay(e.target.value)}>
            <option value="inline">Inline</option>
            <option value="block">Block</option>
            <option value="contents">Contents</option>
            <option value="inline-block">Inline Block</option>
            <option value="table">Table</option>
            <option value="none">None</option>
          </select>
        </div>

        <div className="display-practice-example">
          <span className="display-practice-span">Span 1</span>
          <span className="display-practice-span"
            style={{
                display: `${display}`,
                border: "solid"
            }}
          >
            Span 2
          </span>
          <span className="display-practice-span">Span 3</span>
        </div>
      </div>
      <div className={`${inlineCard ? "display-card" : "display-card-closed"}`}>
        <h2 className="display-card-title">Inline</h2>
        <p className="display-card-description">
          The element generates one or more inline element boxes that do not
          generate line breaks before or after themselves. In normal flow, the
          next element will be on the same line if there is space.
        </p>
        <button
          className="display-card-button"
          onClick={() => toggleInlineCard()}
        >
          CLOSE
        </button>
      </div>
      <div className={`${blockCard ? "display-card" : "display-card-closed"}`}>
        <h2 className="display-card-title">Block</h2>
        <p className="display-card-description">
          The element generates a block element box, generating line breaks both
          before and after the element when in the normal flow.
        </p>
        <button
          className="display-card-button"
          onClick={() => toggleBlockCard()}
        >
          CLOSE
        </button>
      </div>
      <div
        className={`${contentsCard ? "display-card" : "display-card-closed"}`}
      >
        <h2 className="display-card-title">Contents</h2>
        <p className="display-card-description">
          These elements don't produce a specific box by themselves. They are
          replaced by their pseudo-box and their child boxes.
        </p>
        <button
          className="display-card-button"
          onClick={() => toggleContentsCard()}
        >
          CLOSE
        </button>
      </div>
      <div
        className={`${
          inlineBlockCard ? "display-card" : "display-card-closed"
        }`}
      >
        <h2 className="display-card-title">Inline Block</h2>
        <p className="display-card-description">
          The element generates a block element box that will be flowed with
          surrounding content as if it were a single inline box (behaving much
          like a replaced element would).
        </p>
        <button
          className="display-card-button"
          onClick={() => toggleInlineBlockCard()}
        >
          CLOSE
        </button>
      </div>
      <div className={`${tableCard ? "display-card" : "display-card-closed"}`}>
        <h2 className="display-card-title">Table</h2>
        <p className="display-card-description">
          These elements behave like HTML table elements. It defines a
          block-level box.
        </p>
        <button
          className="display-card-button"
          onClick={() => toggleTableCard()}
        >
          CLOSE
        </button>
      </div>
      <div className={`${noneCard ? "display-card" : "display-card-closed"}`}>
        <h2 className="display-card-title">None</h2>
        <p className="display-card-description">
          Turns off the display of an element so that it has no effect on layout
          (the document is rendered as though the element did not exist). All
          descendant elements also have their display turned off.
        </p>
        <button
          className="display-card-button"
          onClick={() => toggleNoneCard()}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}

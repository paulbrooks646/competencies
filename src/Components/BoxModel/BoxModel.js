import React, { useState } from "react";
import "./BoxModel.scss";

export default function BoxModel(props) {
  const [paddingLeft, setPaddingLeft] = useState();
  const [paddingRight, setPaddingRight] = useState();
  const [paddingTop, setPaddingTop] = useState();
  const [paddingBottom, setPaddingBottom] = useState();
  const [marginLeft, setMarginLeft] = useState();
  const [marginRight, setMarginRight] = useState();
  const [marginTop, setMarginTop] = useState();
  const [marginBottom, setMarginBottom] = useState();
  const [borderWidth, setBorderWidth] = useState();
  const [borderStyle, setBorderStyle] = useState("");
  const [borderColor, SetBorderColor] = useState("");
  const [boxSizing, setBoxSizing] = useState("");
  const [borderRadius, setBorderRadius] = useState();
  const [borderCard, setBorderCard] = useState(false);
  const [marginCard, setMarginCard] = useState(false);
  const [paddingCard, setPaddingCard] = useState(false);
  const [boxSizingCard, setBoxSizingCard] = useState(false);

  function toggleBorderCard() {
    setBorderCard(!borderCard);
  }

  function toggleMarginCard() {
    setMarginCard(!marginCard);
  }

  function togglePaddingCard() {
    setPaddingCard(!paddingCard);
  }

  function toggleBoxSizingCard() {
    setBoxSizingCard(!boxSizingCard);
  }

  return (
    <div className="box-model-main">
      <div className="box-model-introduction">
        <div className="box-model-explanation">
          <h1 className="box-model-title">The CSS Box Model</h1>
          <p>
            In HTML each element can be considered a box. The CSS box model is a
            box that wraps around every HTML element. The box model includes the
            content, padding, a border, and a margin. Box sizing also effects
            the CSS box model. Click on a property below for more information.
          </p>
        </div>
        <div box-model-image>
          <img
            src="https://study.com/cimages/multimages/16/boxmodel.jpg"
            alt="Box Model"
          />
        </div>
      </div>
      <div className="box-model-practice">
        <div className="box-model-properties">
          <h2 className="box-model-subtitle" onClick={() => toggleBorderCard()}>Border</h2>
          <div className="box-model-input-div">
            <label className="box-model-property-label" for="borderStyle">
              Border Style:
            </label>
            <select className="box-model-select"
              value={borderStyle}
              onChange={(e) => setBorderStyle(e.target.value)}
            >
              <option value="solid">Solid</option>
              <option value="dotted">Dotted</option>
              <option value="dashed">Dashed</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
              <option value="none">None</option>
              <option value="hidden">Hidden</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Border Width:</label>
            <input
              value={borderWidth}
              placeholder="Type Number Here"
              onChange={(e) => setBorderWidth(e.target.value)}
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Border Color:</label>
            <input
              value={borderColor}
              placeholder="Type Color Here"
              onChange={(e) => SetBorderColor(e.target.value)}
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Border Radius:</label>
            <input
              value={borderRadius}
              placeholder="Type Number Here"
              onChange={(e) => setBorderRadius(e.target.value)}
            />
          </div>
          <h2 className="box-model-subtitle" onClick={() => toggleMarginCard()}>
            Margin
          </h2>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Margin Left:</label>
            <input
              value={marginLeft}
              onChange={(e) => setMarginLeft(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Margin Right:</label>
            <input
              value={marginRight}
              onChange={(e) => setMarginRight(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Margin Top:</label>
            <input
              value={marginTop}
              onChange={(e) => setMarginTop(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Margin Bottom:</label>
            <input
              value={marginBottom}
              onChange={(e) => setMarginBottom(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>

          <h2
            className="box-model-subtitle"
            onClick={() => togglePaddingCard()}
          >
            Padding
          </h2>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Padding Left:</label>
            <input
              value={paddingLeft}
              onChange={(e) => setPaddingLeft(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Padding Right:</label>
            <input
              value={paddingRight}
              onChange={(e) => setPaddingRight(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Padding Top:</label>
            <input
              value={paddingTop}
              onChange={(e) => setPaddingTop(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>
          <div className="box-model-input-div">
            <label className="box-model-property-label">Padding Bottom:</label>
            <input
              value={paddingBottom}
              onChange={(e) => setPaddingBottom(e.target.value)}
              placeholder="Type Number Here"
            />
          </div>
          <h2
            className="box-model-subtitle"
            onClick={() => toggleBoxSizingCard()}
          >
            Box Sizing
          </h2>
          <div className="box-model-input-div">
            <label className="box-model-property-label" for="boxSizing">
              Box Sizing:
            </label>
            <select className="box-model-select"
              value={boxSizing}
              onChange={(e) => setBoxSizing(e.target.value)}
            >
              <option value="content-box">Content Box</option>
              <option value="border-box">Border Box</option>
            </select>
          </div>
        </div>
        <div className="box-div">
          <div
            className="box"
            style={{
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
              paddingTop: `${paddingTop}px`,
              paddingBottom: `${paddingBottom}px`,
              marginLeft: `${marginLeft}px`,
              marginRight: `${marginRight}px`,
              marginTop: `${marginTop}px`,
              marginBottom: `${marginBottom}px`,
              borderWidth: `${borderWidth}px`,
              borderStyle: `${borderStyle}`,
              borderColor: `${borderColor}`,
              boxSizing: `${boxSizing}`,
              borderRadius: `${borderRadius}%`,
            }}
          >
            Box Model
          </div>
        </div>
      </div>
      <div
        className={`${borderCard ? "box-model-card" : "box-model-card-closed"}`}
      >
        <h2 className="box-model-card-title">Border</h2>
        <p className="box-model-card-description">
          There are also properties to help you customize an elements border.
          Today we will look at four: border style, border width, border color
          and border radius. Border style is mandatory if you would like to
          customize a border. There are a variety of values to choose from the
          most common of these being solid. See the dropdown below to see a list
          of border style options. The default for the border width property is
          medium. You can use the values thin, thick or define a specific length
          for it. You can use different measurements but for our purposes to day
          we will be using pixels. You can also give a border a color. You can
          define each of these seperately or all together using the border
          property, giving it a value for each property. You can also specify a
          direction to any of these properties (top, right, bottom or left) if
          you only want one side affected. Border badius changes the shape of an
          element by altering the radius of its corners. You can use different
          measurements to do this, today we will be using a percentage. You can
          use more than one value on the border radius property you need the
          corners to be different. The values will be applied in the following
          order: Top, Right, Bottom Left.
        </p>
        <button
          className="box-model-card-button"
          onClick={() => toggleBorderCard()}
        >
          CLOSE
        </button>
      </div>
      <div
        className={`${marginCard ? "box-model-card" : "box-model-card-closed"}`}
      >
        <h2 className="box-model-card-title">Margin</h2>
        <p className="box-model-card-description">
          In CSS margin is used to generate space outside of an element's
          border. You can use different measurements to define a margin's value
          such as pixels (px), centimeters (cm), or percantage of the width of
          the containing element (%), for our purposes today we will be using
          pixels. You can have different amounts of margin on each side of your
          element. You can define each direction of margin using the properties
          margin-top, margin-right, margin-bottom and margin-left, or you can
          define them all in the margin property. If you give the margin
          property one value it will apply it to each side of the element. If
          you give the margin property two values the first one will be applied
          to the top and bottom, and the second one will be applied to the right
          and left. If you give it 3 or 4 values, it will be applied to
          individual sides in the following order: Top, Right, Bottom, Left.
        </p>
        <button
          className="box-model-card-button"
          onClick={() => toggleMarginCard()}
        >
          CLOSE
        </button>
      </div>
      <div
        className={`${
          paddingCard ? "box-model-card" : "box-model-card-closed"
        }`}
      >
        <h2 className="box-model-card-title">Padding</h2>
        <p className="box-model-card-description">
          In CSS padding is used to generate space around an element's content
          within its border. You can use different measurements to define a
          padding's value such as pixels (px), centimeters (cm), or percantage
          of the width of the containing element (%), for our purposes today we
          will be using pixels. You can have different amounts of padding on
          each side of your content. You can define each direction of padding
          using the properties padding-top, padding-right, padding-bottom and
          padding-left, or you can define them all in the padding property. If
          you give the padding property one value it will apply it to each side
          of the content. If you give the padding property two values the first
          one will be applied to the top and bottom, and the second one will be
          applied to the right and left. If you give it 3 or 4 values, it will
          be applied to individual sides in the following order: Top, Right,
          Bottom, Left.
        </p>
        <button className="box-model-card-button" onClick={() => togglePaddingCard()}>CLOSE</button>
      </div>
      <div
        className={`${
          boxSizingCard ? "box-model-card" : "box-model-card-closed"
        }`}
      >
        <h2 className="box-model-card-title">Box Sizing</h2>
        <p className="box-model-card-description">
          By default when you set an element to a certain height or width any
          padding or border you add to that element will increase its overall
          size. If you change the elements Box sizing to Border-Box then the
          element will retain its size regardless of any padding or border you
          add to it. As you experiment on how the different parts of the CSS box
          model affect the orange square be sure to try them with both the
          default and border-box options to see the different results.
        </p>
        <button className="box-model-card-button" onClick={() => toggleBoxSizingCard()}>CLOSE</button>
      </div>
    </div>
  );
}

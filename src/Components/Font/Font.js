import React, { useState } from "react";
import "./Font.scss";

export default function Font() {
  const [color, setColor] = useState();
  const [style, setStyle] = useState();
  const [variant, setVariant] = useState();
  const [weight, setWeight] = useState();
  const [size, setSize] = useState();
  const [height, setHeight] = useState();
  const [family, setFamily] = useState();
  const [colorCard, setColorCard] = useState(false);
  const [styleCard, setStyleCard] = useState(false);
  const [variantCard, setVariantCard] = useState(false);
  const [weightCard, setWeightCard] = useState(false);
  const [sizeCard, setSizeCard] = useState(false);
  const [heightCard, setHeightCard] = useState(false);
  const [familyCard, setFamilyCard] = useState(false);

  function toggleColorCard() {
    setColorCard(!colorCard);
  }

  function toggleStyleCard() {
    setStyleCard(!styleCard);
  }

  function toggleVariantCard() {
    setVariantCard(!variantCard);
  }

  function toggleWeightCard() {
    setWeightCard(!weightCard);
  }

  function toggleSizeCard() {
    setSizeCard(!sizeCard);
  }

  function toggleHeightCard() {
    setHeightCard(!heightCard);
  }

  function toggleFamilyCard() {
    setFamilyCard(!familyCard);
  }

  return (
    <div className="font-main">
      <div className="font-introduction">
        <h1>Font</h1>
        <p>
          The font attributes affect the text of a given element. These
          attributes are color, font-style, font-variant, font-weight,
          font-size, line-height and font-family. Adjust the properties to see
          how they effect the text below. Click on any of the property names for
          more information on that property.
        </p>
      </div>

      <div className="font-practice">
        <div className="font-properties">
          <div className="font-input-div">
            <label className="font-label" onClick={() => toggleColorCard()}>
              Color:
            </label>
            <input
              className="font-input"
              placeholder="Enter color here"
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="font-input-div">
            <label className="font-label" onClick={() => toggleStyleCard()}>
              Font Style:
            </label>
            <select
              className="font-select"
              onChange={(e) => setStyle(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="italic">Italic</option>
              <option value="oblique">Oblique</option>
            </select>
          </div>
          <div className="font-input-div">
            <label className="font-label" onClick={() => toggleVariantCard()}>
              Font Variant:
            </label>
            <select
              className="font-select"
              onChange={(e) => setVariant(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="small-caps">Small Caps</option>
            </select>
          </div>
          <div className="font-input-div">
            <label className="font-label" onClick={() => toggleSizeCard()}>
              Font Size:
            </label>
            <input
              className="font-input"
              onChange={(e) => setSize(e.target.value)}
              placeholder="Enter # in pixels"
            />
          </div>

          <div className="font-input-div">
            <label className="font-label" onClick={() => toggleWeightCard()}>
              Font Weight:
            </label>
            <select
              className="font-select"
              onChange={(e) => setWeight(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="Lighter">Lighter</option>
              <option value="Bold">Bold</option>
              <option value="bolder">Bolder</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="600">600</option>
              <option value="700">700</option>
              <option value="800">800</option>
              <option value="900">900</option>
            </select>
          </div>
          <div className="font-input-div">
            <label className="font-label" onClick={() => toggleHeightCard()}>
              Line Height:
            </label>
            <input
              className="font-input"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter # here"
            />
          </div>
          <div className="font-input-div">
            <label className="font-label" onClick={() => toggleFamilyCard()}>
              Font Family:
            </label>
            <select
              className="font-select"
              onChange={(e) => setFamily(e.target.value)}
            >
              <option value="serif">Serif</option>
              <option value="sans-serif">Sans Serif</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
              <option value="fantasy">Fantasy</option>
              <option value="math">Math</option>
            </select>
          </div>
        </div>
        <div className="font-example">
          <h1
            style={{
              color: color,
              fontStyle: style,
              fontVariant: variant,
              fontWeight: weight,
              fontSize: `${size}px`,
              lineHeight: height,
              fontFamily: family,
            }}
          >
            Change my font values!
          </h1>
        </div>
      </div>
      <div className={`${colorCard ? "font-card" : "font-card-closed"}`}>
        <h2 className="font-card-title">Color</h2>
        <p className="font-card-description">
          The color property is used to specify an element's text's color. You
          can use predefined color names, hex codes, rgb, rgba, hsl, and hsla
          codes to define this properties value.
        </p>
        <button className="font-card-button" onClick={() => toggleColorCard()}>
          CLOSE
        </button>
      </div>
      <div className={`${styleCard ? "font-card" : "font-card-closed"}`}>
        <h2 className="font-card-title">Font Style</h2>
        <p className="font-card-description">
          The font-style property specifies the style of a text. The possible
          values are normal, italic or oblique.
        </p>
        <button className="font-card-button" onClick={() => toggleStyleCard()}>
          CLOSE
        </button>
      </div>
      <div className={`${variantCard ? "font-card" : "font-card-closed"}`}>
        <h2 className="font-card-title">Font Variant</h2>
        <p className="font-card-description">
          The font-variant property allows you to turn text to small-caps. In
          small-caps, all lowercase letters are converted to uppercase letters.
          However, the converted uppercase letters have a smaller font-size than
          the original uppercase letters.
        </p>
        <button
          className="font-card-button"
          onClick={() => toggleVariantCard()}
        >
          CLOSE
        </button>
      </div>
      <div className={`${weightCard ? "font-card" : "font-card-closed"}`}>
        <h2 className="font-card-title">Font Weight</h2>
        <p className="font-card-description">
          The font-weight property sets how thick the characters in a text
          should be displayed. It accepts the values normal, bold, bolder,
          lighter or a number between 100 and 900.
        </p>
        <button className="font-card-button" onClick={() => toggleWeightCard()}>
          CLOSE
        </button>
      </div>
      <div className={`${sizeCard ? "font-card" : "font-card-closed"}`}>
        <h2 className="font-card-title">Font Size</h2>
        <p className="font-card-description">
          The font-size property sets the size of the characters of a text.The
          values accepted for this property include a variety of preset keywords
          (which you can see in the dropdown below), fixed lengths defined by
          units of measurement, or a percentage of the parent elements
          font-size.
        </p>
        <button className="font-card-button" onClick={() => toggleSizeCard()}>
          CLOSE
        </button>
      </div>
      <div className={`${heightCard ? "font-card" : "font-card-closed"}`}>
        <h2 className="font-card-title">Line Height</h2>
        <p className="font-card-description">
          The line-height property sets the height of the line containing the
          specified element's text. This is used to set the distance between
          lines of text. This property accepts numbers to be multiplied by the
          text's font-size, a length specified by a unit of measurement, or a
          percentage of the current font-size.
        </p>
        <button className="font-card-button" onClick={() => toggleHeightCard()}>
          CLOSE
        </button>
      </div>
      <div className={`${familyCard ? "font-card" : "font-card-closed"}`}>
        <h2 className="font-card-title">Font Family</h2>
        <p className="font-card-description">
          The font-family specifies the font for the text of an
          element. This is the name of a font-family or of a
          generic family. You may assign multiple values to this property. A
          value will only be applied if any preceding values are not supported
          by the browser. A popular place to find free fonts is <a href="fonts.google.com">fonts.google.com</a>
        </p>
        <button className="font-card-button" onClick={() => toggleFamilyCard()}>
          CLOSE
        </button>
      </div>

      {/* <div style={{ borderBottom: "solid" }}>
        <div className="animationDescriptionRow">
          <div className="fifty">
            <h2>Color</h2>
            <p>
              
            </p>
          </div>
          <div className="fifty">
            <h2>Font Style</h2>
            <p>
              
            </p>
          </div>
        </div>
        <div className="animationDescriptionRow">
          <div className="fifty">
            <h2>Font Variant</h2>
            <p>
              
            </p>
          </div>
          <div className="fifty">
            <h2>Font Weight</h2>
            <p>
              
            </p>
          </div>
        </div>
        <div className="animationDescriptionRow">
          <div className="fifty">
            <h2>Font Size</h2>
            <p>
              
            </p>
          </div>
          <div className="fifty">
            <h2>Line Height</h2>
            <p>
              
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="fifty">
            <h2>Font Family</h2>
            <p>
              
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

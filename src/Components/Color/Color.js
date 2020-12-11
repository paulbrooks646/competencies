import React, { useState } from "react";
import "./Color.scss";

export default function Color() {
  const [predefinedBackground, setPredefinedBackground] = useState();
  const [predefinedColor, setPredefinedColor] = useState();
  const [predefinedBorder, setPredefinedBorder] = useState();
  const [hexBackground, setHexBackground] = useState();
  const [hexColor, setHexColor] = useState();
  const [hexBorder, setHexBorder] = useState();
  const [rgbaBackground, setRgbaBackground] = useState();
  const [rgbaColor, setRgbaColor] = useState();
  const [rgbaBorder, setRgbaBorder] = useState();
  const [hslaBackground, setHslaBackground] = useState();
  const [hslaColor, setHslaColor] = useState();
  const [hslaBorder, setHslaBorder] = useState();
  const [predefinedSection, setPredefinedSection] = useState(true);
  const [rgbSection, setRgbSection] = useState(false);
  const [hexSection, setHexSection] = useState(false);
  const [hslSection, setHslSection] = useState(false);

  function togglePredefined() {
    setPredefinedSection(true);
    setRgbSection(false);
    setHexSection(false);
    setHslSection(false);
  }

  function toggleHexCode() {
    setPredefinedSection(false);
    setRgbSection(false);
    setHexSection(true);
    setHslSection(false);
  }

  function toggleRGB() {
    setPredefinedSection(false);
    setRgbSection(true);
    setHexSection(false);
    setHslSection(false);
  }

  function toggleHSL() {
    setPredefinedSection(false);
    setRgbSection(false);
    setHexSection(false);
    setHslSection(true);
  }

  return (
    <div className="color-main">
      <div className="color-introduction">
        <h1 className="color-title">Color</h1>
        <p className="color-description">
          Color is crucial to styling. In CSS, there are different ways to refer
          to a color. Certain colors are predefined and can simply be referred
          to by name. They can also be referenced by their hex code, RGB value,
          or HSL value. Which would you like to learn about first?
        </p>
        <div className="color-buttons">
          <button className="color-button" onClick={() => togglePredefined()}>
            Predefined Colors
          </button>
          <button className="color-button" onClick={() => toggleHexCode()}>
            Hex Codes
          </button>
          <button className="color-button" onClick={() => toggleHSL()}>
            HSL & HSLA
          </button>
          <button className="color-button" onClick={() => toggleRGB()}>
            RGB & RGBA
          </button>
        </div>
      </div>
      <section
        className={`${
          predefinedSection
            ? "predefined-color-section"
            : "predefined-color-section-closed"
        }`}
      >
        <div className="predefined-introduction">
          <div className="predefined-description-div">
            <h2>Predefined Colors</h2>
            <p>
              On the diagram to the right you can see a chart of all the
              predefined colors in CSS. To use any of these colors you can
              simply use the name as a value for a color related property.
            </p>
          </div>
          <div className="predefined-color-chart-div">
            <img
              className="predefined-color-chart"
              src="https://i.pinimg.com/originals/1c/60/13/1c6013c9e39d0627e339ef7b60a26320.jpg"
              alt="Predefined Colors Chart"
            />
          </div>
        </div>

        <div className="predefined-practice">
          <div className="predefined-properties">
            <h2 className="predefined-subtitle">
              Give the following properties a predefined color value.
            </h2>
            <div className="predefined-input-div">
              <label className="predefined-label">Background-color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setPredefinedBackground(e.target.value)}
              />
            </div>
            <div className="predefined-input-div">
              <label className="predefined-label">Color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setPredefinedColor(e.target.value)}
              />
            </div>
            <div className="predefined-input-div">
              <label className="predefined-label">Border-color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setPredefinedBorder(e.target.value)}
              />
            </div>
          </div>
          <div className="predefined-example">
            <div
              className="predefined-example-box"
              style={{
                backgroundColor: predefinedBackground,
                color: predefinedColor,

                borderColor: predefinedBorder,
              }}
            >
              Predefined Color Practice
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${
          hexSection ? "hex-code-section" : "hex-code-section-closed"
        }`}
      >
        <div className="hex-code-introduction">
          <div className="hex-code-description-div">
            <h2>Hex Codes</h2>
            <p>
              Hexadecimal color values use the following format: #RRGGBB. RR is
              used for red, GG is used for green, and BB is used for blue. You
              create a new color by altering the amount of these 3 colors. To do
              this you use integers from 0 to 9 or A to F. O being the lowest
              and F being the highest. For example, #0000FF would be blue
              because it contains 0 red or green and the max amount of blue.
              #000000
            </p>
          </div>
          <div className="hex-code-diagram-div">
            <img
              className="hex-code-diagram"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq2SpcEjlOp2_ar6fCBpQEpd_TlfiQgx9GKw&usqp=CAU"
              alt="hex code diagram"
            />
          </div>
        </div>
        <div className="hex-code-practice">
          <div className="hex-code-properties">
            <h2 className="hex-code-subtitle">
              Give the following properties a color value using hex codes. Don't
              for the #.
            </h2>
            <div className="hex-code-input-div">
              <label className="hex-code-label">Background-color:</label>
              <input
                placeholder="Type hex code here"
                onChange={(e) => setHexBackground(e.target.value)}
              />
            </div>
            <div className="hex-code-input-div">
              <label className="hex-code-label">Color:</label>
              <input
                placeholder="Type hex code here"
                onChange={(e) => setHexColor(e.target.value)}
              />
            </div>
            <div className="hex-code-input-div">
              <label className="hex-code-label">Border-color:</label>
              <input
                placeholder="Type hex code here"
                onChange={(e) => setHexBorder(e.target.value)}
              />
            </div>
          </div>
          <div className="hex-code-example">
            <div
              className="hex-code-example-circle"
              style={{
                backgroundColor: hexBackground,
                color: hexColor,
                borderColor: hexBorder,
              }}
            >
              Hex Code Color Practice
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${hslSection ? "hsl-section" : "hsl-section-closed"}`}
      >
        <div className="hsl-introduction">
          <div className="hsl-description-div">
            <h2>HSL & HSLA</h2>
            <p style={{ width: "90%" }}>
              HSL & HSLA define colors by using their hue, saturation and
              lightness. The syntax is HSL: hsl(hue, staturation, lightness) or
              HSLA: hlsa(hue, saturation, lightness, alpha). Hue deifnes a
              degree on a color circle. its value ranges from 0 to 360. 0 is
              red, 120 is green and 240 is blue. Saturation uses a percentage
              between 0 and 100 where 0 is a shade of gray and 100 is the full
              color. Lightness also uses a percentage between 0 and 100. 0 is
              black, as the percentage increases, the color gets lighter. 50% is
              normal and 100% is white. Alpha defines the opactity. Its value is
              between 0 and 1 where 0 is transparent and 1 is opaque.
            </p>
          </div>
          <div className="hsl-diagram-div">
            <img
              className="hsl-diagram"
              src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2015/01/hsl-color-wheel.png"
              alt="hsl diagram"
            />
          </div>
        </div>
        <div className="hsl-practice">
          <div className="hsl-properties">
            <h2 className="hsl-subtitle">
              Give rectangle's properties an HSL or HSLA value.
            </h2>
            <div className="hsl-input-div">
              <label className="hsl-label">Background-color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setHslaBackground(e.target.value)}
              />
            </div>
            <div className="hsl-input-div">
              <label className="hsl-label">Color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setHslaColor(e.target.value)}
              />
            </div>
            <div className="hsl-input-div">
              <label className="hsl-label">Border-color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setHslaBorder(e.target.value)}
              />
            </div>
          </div>
          <div className="hsl-example">
            <div
              className="hsl-example-rectangle"
              style={{
                backgroundColor: hslaBackground,
                color: hslaColor,
                borderColor: hslaBorder,
              }}
            >
              HSL & HSLA Color Practice
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${rgbSection ? "rgb-section" : "rgb-section-closed"}`}
      >
        <div className="rgb-introduction">
          <div className="rgb-description-div">
            <h2>RGB & RGBA</h2>
            <p style={{ width: "90%" }}>
              In CSS a color can also be defined by its RGB or RGBA value. The
              syntac is RGB: rgb(red, green, blue). RGBA: rgba(red, green, blue,
              alpha). Red is how much red the color contains, green is how much
              green the color contains and blue is how much blue the color
              contains. These values range from 0 to 255. Alpha is how opaque
              the applied element is. It takes a value between 0 and 1. O being
              transparent and 1 being opaque.
            </p>
          </div>
          <div className="rgb-diagram-div">
            <img
              className="rgb-diagram"
              src="https://teachengineering.org/content/spfun_/maker_challenges/spfun_rgbcolor_maker1_image1.png"
              alt="RGB diagram"
            />
          </div>
        </div>
        <div className="rgb-practice">
          <div className="rgb-properties">
            <h2 className="rgb-subtitle">
              Give the oval's properties a RGB or RGBA color value.
            </h2>
            <div className="rgb-input-div">
              <label className="rgb-label">Background-color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setRgbaBackground(e.target.value)}
              />
            </div>
            <div className="rgb-input-div">
              <label className="rgb-label">Color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setRgbaColor(e.target.value)}
              />
            </div>
            <div className="rgb-input-div">
              <label className="rgb-label">Border-color:</label>
              <input
                placeholder="Type color here"
                onChange={(e) => setRgbaBorder(e.target.value)}
              />
            </div>
          </div>
          <div className="rgb-example">
            <div
              className="rgb-example-oval"
              style={{
                backgroundColor: rgbaBackground,
                color: rgbaColor,
                borderColor: rgbaBorder,
              }}
            >
              RGB & RGBA Color Practice
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

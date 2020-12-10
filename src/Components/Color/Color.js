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

        <div className="predefined-practice"
        >
          <div className="predefined-properties"
          >
            <h4 style={{ width: "90%" }}>
              Give the following properties a predefined color value. Try
              multiple values and see its affect on the square to the right.
            </h4>
            <label>Background-color:</label>
            <input
              placeholder="Type color here"
              onChange={(e) => setPredefinedBackground(e.target.value)}
            />
            <label>Color:</label>
            <input
              placeholder="Type color here"
              onChange={(e) => setPredefinedColor(e.target.value)}
            />
            <label>Border-color:</label>
            <input
              placeholder="Type color here"
              onChange={(e) => setPredefinedBorder(e.target.value)}
            />
          </div>
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: predefinedBackground,
                color: predefinedColor,
                borderStyle: "solid",
                borderColor: predefinedBorder,
                borderWidth: "5px",
              }}
            >
              Predefined Color Practice
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Hex Codes</h2>
          <p style={{ width: "90%" }}>
            Hexadecimal color values use the following format: #RRGGBB. RR is
            used for red, GG is used for green, and BB is used for blue. You
            create a new color by altering the amount of these 3 colors. To do
            this you use integers from 0 to 9 or A to F. O being the lowest and
            F being the highest. For example, #0000FF would be blue because it
            contains 0 red or green and the max amount of blue. #000000
          </p>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq2SpcEjlOp2_ar6fCBpQEpd_TlfiQgx9GKw&usqp=CAU"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderBottom: "solid 1px black",
          height: "400px",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ width: "90%" }}>
            Give the following properties a color value using a hex code. Don't
            for the #. Try multiple values and see its affect on the circle to
            the right.
          </h3>
          <label>Background-color:</label>
          <input
            placeholder="Type hex code here"
            onChange={(e) => setHexBackground(e.target.value)}
          />
          <label>Color:</label>
          <input
            placeholder="Type hex code here"
            onChange={(e) => setHexColor(e.target.value)}
          />
          <label>Border-color:</label>
          <input
            placeholder="Type hex code here"
            onChange={(e) => setHexBorder(e.target.value)}
          />
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: hexBackground,
              color: hexColor,
              borderStyle: "dotted",
              borderColor: hexBorder,
              borderWidth: "5px",
              borderRadius: "50%",
            }}
          >
            Hex Code Color Practice
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>HSL & HSLA</h2>
          <p style={{ width: "90%" }}>
            HSL & HSLA are ways to define a color by using their hue, saturation
            and lightness. This is the syntax. HSL: hsl(hue, staturation,
            lightness). HSLA: hlsa(hue, saturation, lightness, alpha). Hue
            deifnes a degree on a color circle and so its value ranges from 0 to
            360. 0 is red, 120 is green and 240 is blue. Saturation uses a
            percentage between 0 and 100 where 0 is a shade of gray and 100 is
            the full color. Lightness also uses a percentage between 0 and 100.
            0 is black and as the percentage increases, the color gets lighter.
            50% is normal and 100% is white. Alpha defines the opactity. It is
            defined as a value between 0 and 1 where 0 is fully transparent and
            1 is fully opaque.
          </p>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "90%" }}
            src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2015/01/hsl-color-wheel.png"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderBottom: "solid 1px black",
          height: "400px",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ width: "90%" }}>
            Give the following properties an HSL or HSLA color value using the
            syntax described above. Try multiple values and see its affect on
            the rectangle to the right.
          </h3>
          <label>Background-color:</label>
          <input
            placeholder="Type color here"
            onChange={(e) => setHslaBackground(e.target.value)}
          />
          <label>Color:</label>
          <input
            placeholder="Type color here"
            onChange={(e) => setHslaColor(e.target.value)}
          />
          <label>Border-color:</label>
          <input
            placeholder="Type color here"
            onChange={(e) => setHslaBorder(e.target.value)}
          />
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: hslaBackground,
              color: hslaColor,
              borderStyle: "dashed",
              borderColor: hslaBorder,
              borderWidth: "5px",
            }}
          >
            HSL & HSLA Color Practice
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>RGB & RGBA</h2>
          <p style={{ width: "90%" }}>
            In CSS a color can also be specified by its RGB or RGBA value. They
            use the folowing syntax. RGB: rgb(red, green, blue). RGBA: rgba(red,
            green, blue, alpha). Red is how much red the color contains, green
            is how much green the color contains and blue is how much blue the
            color contains. These values range from 0 to 255. Alpha is how
            opaque the applied element is. It takes a value between 0 and 1. O
            being transparent and 1 being opaque.
          </p>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "50%" }}
            src="https://teachengineering.org/content/spfun_/maker_challenges/spfun_rgbcolor_maker1_image1.png"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderBottom: "solid 1px black",
          height: "400px",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ width: "90%" }}>
            Give the following properties a RGB or RGBA color value using the
            syntax described above. Try multiple values and see its affect on
            the oval to the right.
          </h3>
          <label>Background-color:</label>
          <input
            placeholder="Type RGB or RGBA here"
            onChange={(e) => setRgbaBackground(e.target.value)}
          />
          <label>Color:</label>
          <input
            placeholder="Type RGB or RGBA here"
            onChange={(e) => setRgbaColor(e.target.value)}
          />
          <label>Border-color:</label>
          <input
            placeholder="Type RGB or RGBA here"
            onChange={(e) => setRgbaBorder(e.target.value)}
          />
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "175px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: rgbaBackground,
              color: rgbaColor,
              borderStyle: "double",
              borderColor: rgbaBorder,
              borderWidth: "10px",
              borderRadius: "50%",
            }}
          >
            RGB & RGBA Color Practice
          </div>
        </div>
      </div>
    </div>
  );
}

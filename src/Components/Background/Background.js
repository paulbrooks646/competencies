import React, { useState } from "react";
import "./Background.scss";

export default function Background() {
  const [repeat, setRepeat] = useState();
  const [position, setPosition] = useState();
  const [size, setSize] = useState("contain");
  const [xaxis, setXaxis] = useState();
  const [yaxis, setYaxis] = useState();
  const [xpixel, setXpixel] = useState();
  const [ypixel, setYpixel] = useState();
  const [xsize, setXsize] = useState();
  const [ysize, setYsize] = useState();
  const [sizexpixel, setSizexpixel] = useState();
  const [sizeypixel, setSizeypixel] = useState();
  const [colorone, setColorone] = useState("red");
  const [colortwo, setColortwo] = useState("blue");
  const [colorthree, setColorthree] = useState("green");
  const [percentone, setPercentone] = useState(0);
  const [percenttwo, setPercenttwo] = useState(33);
  const [percentthree, setPercentthree] = useState(66);
  const [direction, setDirection] = useState(0);
  const [endone, setEndone] = useState(20);
  const [endtwo, setEndtwo] = useState(50);
  const [endthree, setEndthree] = useState(80);
  const [radialOne, setRadialOne] = useState("red");
  const [radialTwo, setRadialTwo] = useState("blue");
  const [radialThree, setRadialThree] = useState("green");
  const [radialStartOne, setRadialStartOne] = useState(0);
  const [radialStartTwo, setRadialStartTwo] = useState(33);
  const [radialStartThree, setRadialStartThree] = useState(66);
  const [radialStopOne, setRadialStopOne] = useState(20);
  const [radialStopTwo, setRadialStopTwo] = useState(50);
  const [radialStopThree, setRadialStopThree] = useState(80);
  const [shape, setShape] = useState("ellipse");
  const [radialSize, setRadialSize] = useState("farthest-corner");
  const [radialPosition, setRadialPosition] = useState("center center");
  const [backgroundImage, setBackgroundImage] = useState(true);
  const [linearGradient, setLinearGradient] = useState(false);
  const [radialGradient, setRadialGradient] = useState(false);
  const [repeatCard, setRepeatCard] = useState(false);
  const [positionCard, setPositionCard] = useState(false);
  const [sizeCard, setSizeCard] = useState(false);

  function toggleBackgroundImage() {
    setBackgroundImage(true);
    setLinearGradient(false);
    setRadialGradient(false);
  }

  function toggleLinearGradient() {
    setBackgroundImage(false);
    setLinearGradient(true);
    setRadialGradient(false);
  }

  function toggleRadialGradient() {
    setBackgroundImage(false);
    setLinearGradient(false);
    setRadialGradient(true);
  }

  function toggleRepeatCard() {
    setRepeatCard(!repeatCard);
  }

  function togglePositionCard() {
    setPositionCard(!positionCard);
  }

  function toggleSizeCard() {
    setSizeCard(!sizeCard);
  }

  return (
    <div className="background-main">
      <section className="background-introduction-section">
        <h1 className="background-title">Background</h1>
        <p className="background-description">
          In CSS their are more options than a simple color for the background
          of your elements. Which would you like to learn about first?
        </p>
        <div className="background-introduction-buttons">
          <button
            className="background-introduction-button"
            onClick={() => toggleBackgroundImage()}
          >
            Background Images
          </button>
          <button
            className="background-introduction-button"
            onClick={() => toggleLinearGradient()}
          >
            Linear Gradients
          </button>
          <button
            className="background-introduction-button"
            onClick={() => toggleRadialGradient()}
          >
            Radial Gradients
          </button>
        </div>
      </section>
      <section
        className={`${
          backgroundImage
            ? "background-image-section"
            : "background-image-section-closed"
        }`}
      >
        <div className="background-image-introduction">
          <h2 className="background-image-title">Background Image</h2>
          <p className="background-image-description">
            The background-image property sets one or more background images for
            an element. There are properties to help make sure you image appears
            precisely how you like. Click on a property name to get more
            details. Adjust the properties and see how it effects the image
            below.
          </p>
        </div>
        <div className="background-image-main">
          <div className="background-image-properties">
            <div className="background-image-property">
              <label
                className="background-label"
                onClick={() => toggleRepeatCard()}
              >
                Background Repeat:
              </label>
              <select
                value={repeat}
                onChange={(e) => setRepeat(e.target.value)}
              >
                <option value="repeat">Repeat</option>
                <option value="no-repeat">No Repeat</option>
                <option value="repeat-x">Repeat X</option>
                <option value="repeat-y">Repeat Y</option>
                <option value="space">Space</option>
                <option value="round">Round</option>
              </select>
            </div>
            <div className="background-image-property">
              <label
                className="background-label"
                onClick={() => togglePositionCard()}
              >
                Background Position:
              </label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="Left Top">Left Top</option>
                <option value="Left Center">Left Center</option>
                <option value="Left Bottom">Left Bottom</option>
                <option value="Right Top">Right Top</option>
                <option value="Right Center">Right Center</option>
                <option value="Right Bottom">Right Bottom</option>
                <option value="Center Top">Center Top</option>
                <option value="Center Center">Center Center</option>
                <option value="Center Bottom">Center Bottom</option>
              </select>
              <h4 className="background-conjunction">Or</h4>
              <div className="background-property-section">
                <div className="background-property-subsection">
                  <label>X-Axis %</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter % here"
                    onChange={(e) => setXaxis(e.target.value)}
                  />
                </div>
                <div className="background-property-subsection">
                  <label>Y-Axis %</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter % here"
                    onChange={(e) => setYaxis(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="background-property-button"
                onClick={() => setPosition(`${xaxis}% ${yaxis}%`)}
              >
                Submit
              </button>
              <h4 className="background-conjunction">Or</h4>
              <div className="background-property-section">
                <div className="background-property-subsection">
                  <label>X-Axis Pixels</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter px here"
                    onChange={(e) => setXpixel(e.target.value)}
                  />
                </div>
                <div className="background-property-subsection">
                  <label>Y-Axis Pixels</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter px here"
                    onChange={(e) => setYpixel(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="background-property-button"
                onClick={() => setPosition(`${xpixel}px ${ypixel}px`)}
              >
                Submit
              </button>
            </div>
            <div className="background-image-property">
              <label
                className="background-label"
                onClick={() => toggleSizeCard()}
              >
                Background Size:
              </label>
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="Cover">Cover</option>
                <option value="Contain">Contain</option>
              </select>
              <h4 className="background-conjunction">Or</h4>
              <div className="background-property-section">
                <div className="background-property-subsection">
                  <label>Width Percent</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter % here"
                    onChange={(e) => setXsize(e.target.value)}
                  />
                </div>
                <div className="background-property-subsection">
                  <label>Height Percent</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter % here"
                    onChange={(e) => setYsize(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="background-property-button"
                onClick={() => setSize(`${xsize}% ${ysize}%`)}
              >
                Submit
              </button>
              <h4 className="background-conjunction">Or</h4>
              <div className="background-property-section">
                <div className="background-property-subsection">
                  <label>X-Axis Pixels</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter px here"
                    onChange={(e) => setSizexpixel(e.target.value)}
                  />
                </div>
                <div className="background-property-subsection">
                  <label>Y-Axis Pixels</label>
                  <input
                    className="background-property-input"
                    placeholder="Enter px here"
                    onChange={(e) => setSizeypixel(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="background-property-button"
                onClick={() => setSize(`${sizexpixel}px ${sizeypixel}px`)}
              >
                Submit
              </button>
            </div>
          </div>
          <div
            className="background-image"
            style={{
              backgroundRepeat: repeat,
              backgroundPosition: position,
              backgroundSize: size,
            }}
          ></div>
        </div>
        <div
          className={`${
            repeatCard ? "background-card" : "background-card-closed"
          }`}
        >
          <h2 className="background-card-title">Background Repeat</h2>
          <p className="background-card-description">
            By default your background image will repeat if it doen't fill its
            container. If this isn't what you want, you can use the
            background-repeat property. The values associated with the property
            are: no-repeat (if you want no repitition), repeat-x (allows the
            image to only be repeated horizontally), repeat-y (allows the image
            to only be repeated vertically), space (the background image is
            repeated as many times as possible without clipping, distributing
            any whitespace evenly between repititions, and round (the image is
            repeated and squished or stretched so there will be no whitespace).
          </p>
          <button
            className="background-card-button"
            onClick={() => toggleRepeatCard()}
          >
            CLOSE
          </button>
        </div>
        <div
          className={`${
            positionCard ? "background-card" : "background-card-closed"
          }`}
        >
          <h2 className="background-card-title">Background Position</h2>
          <p className="background-card-description">
            The background-position property sets the starting position of the
            background image. This can be done with set values (see the dropdown
            below), units of measurement such as pixels, or a percentage on the
            containing element. These accept two values the first being width
            and the second height.
          </p>
          <button
            className="background-card-button"
            onClick={() => togglePositionCard()}
          >
            CLOSE
          </button>
        </div>
        <div
          className={`${
            sizeCard ? "background-card" : "background-card-closed"
          }`}
        >
          <h2 className="background-card-title">Background Size</h2>
          <p className="background-card-description">
            The default value for background-size is auto which displays its
            original size. The length and percentage values both take in two
            parameters, the first being width and the second being height. They
            set a speicfic length and width to the image. Cover resize the image
            to cover the container even if it has to stretch or cut of a little
            bit of the image. Contain resizes the image to make sure it is fully
            visible
          </p>
          <button
            className="background-card-button"
            onClick={() => toggleSizeCard()}
          >
            CLOSE
          </button>
        </div>
      </section>

      <section
        className={`${
          linearGradient
            ? "linear-gradient-section"
            : "linear-gradient-section-closed"
        }`}
      >
        <div className="linear-gradient-introduction">
          <h2 className="linear-gradient-title">Linear Gradient</h2>
          <p>
            A linear gradient is an image consisting of a progressive transition
            between two or more colors along a straight line. In addition to
            choosing which colors and how many colors to use, you can specify
            where you want a color to stop and define a starting point with a
            direction or angle.
          </p>
          <div className="linear-gradient-main">
            <div className="linear-gradient-properties">
              <h2 className="linear-gradient-subtitle">Choose three colors:</h2>
              <div>
                <label className="linear-gradient-label">Color One:</label>
                <input
                  placeholder="Enter color here"
                  onChange={(e) => setColorone(e.target.value)}
                />
              </div>
              <div>
                <label className="linear-gradient-label">Color Two:</label>
                <input
                  placeholder="Enter color here"
                  onChange={(e) => setColortwo(e.target.value)}
                />
              </div>
              <div>
                <label className="linear-gradient-label">Color Three:</label>
                <input
                  placeholder="Enter color here"
                  onChange={(e) => setColorthree(e.target.value)}
                />
              </div>
              <h2 className="linear-gradient-subtitle">
                Give the colors start and stop points:
              </h2>
              <div>
                <label className="linear-gradient-label">Color One:</label>
                <input
                  className="linear-gradient-input"
                  placeholder="Start %"
                  onChange={(e) => setPercentone(e.target.value)}
                />
                <input
                  className="linear-gradient-input"
                  placeholder="Stop %"
                  onChange={(e) => setEndone(e.target.value)}
                />
              </div>
              <div>
                <label className="linear-gradient-label">Color Two:</label>
                <input
                  className="linear-gradient-input"
                  placeholder="Start %"
                  onChange={(e) => setPercenttwo(e.target.value)}
                />
                <input
                  className="linear-gradient-input"
                  placeholder="Stop %"
                  onChange={(e) => setEndtwo(e.target.value)}
                />
              </div>
              <div>
                <label className="linear-gradient-label">Color Three:</label>
                <input
                  className="linear-gradient-input"
                  placeholder="Start %"
                  onChange={(e) => setPercentthree(e.target.value)}
                />
                <input
                  className="linear-gradient-input"
                  placeholder="Stop %"
                  onChange={(e) => setEndthree(e.target.value)}
                />
              </div>
              <h2 className="linear-gradient-subtitle">
                Choose a direction or angle. When typing an angle remember to
                type 'deg' after your number.
              </h2>
              <label className="linear-gradient-label">Direction:</label>
              <select
                value={direction}
                onChange={(e) => setDirection(e.target.value)}
              >
                <option value="To Top Right">To Top Right</option>
                <option value="To Right">To Right</option>
                <option value="To Bottom Right">To Bottom Right</option>
                <option value="To Bottom">To Bottom</option>
                <option value="To Bottom Left">To Bottom Left</option>
                <option value="To Left">To Left</option>
                <option value="To Top Left">To Top Left</option>
                <option value="To Top">To Top</option>
              </select>
              <h4 className="linear-gradient-conjunction">Or</h4>
              <div>
                <label className="linear-gradient-label">Angle:</label>
                <input
                  placeholder="Enter angle here"
                  onChange={(e) => setDirection(e.target.value)}
                />
              </div>
            </div>
            <div className="linear-gradient-div">
              <div
                className="linear-gradient"
                style={{
                  backgroundImage: `linear-gradient(${direction}, ${colorone} ${percentone}% ${endone}%, ${colortwo} ${percenttwo}% ${endtwo}%, ${colorthree} ${percentthree}% ${endthree}%)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${
          radialGradient
            ? "radial-gradient-section"
            : "radial-gradient-section-closed"
        }`}
      >
        <div className="radial-gradient-introduction">
          <h2 className="radial-gradient-title">Radial Gradient</h2>
          <p>
            A radial gradient is an image consisting of a progressive transition
            between two or more colors from an origin. It can either be an
            ellipse or a circle. In addition to choosing which colors and how
            many colors to use, you can specify where you want a color to start
            and stop and give it a size and position.
          </p>
        </div>
        <div className="radial-gradient-main">
          <div className="radial-gradient-properties">
            <h2 className="radial-gradient-subtitle">Choose a shape:</h2>
            <label className="radial-gradient-label">Shape:</label>
            <select value={shape} onChange={(e) => setShape(e.target.value)}>
              <option value="ellipse">Ellipse</option>
              <option value="circle">Circle</option>
            </select>
            <h2 className="radial-gradient-subtitle">Choose three colors:</h2>
            <div>
              <label className="radial-gradient-label">Color One:</label>
              <input
                placeholder="Enter color here"
                onChange={(e) => setRadialOne(e.target.value)}
              />
            </div>
            <div>
              <label className="radial-gradient-label">Color Two:</label>
              <input
                placeholder="Enter color here"
                onChange={(e) => setRadialTwo(e.target.value)}
              />
            </div>
            <div>
              <label className="radial-gradient-label">Color Three:</label>
              <input
                placeholder="Enter color here"
                onChange={(e) => setRadialThree(e.target.value)}
              />
            </div>
            <h2 className="radial-gradient-subtitle">
              Give the colors start and stop points:
            </h2>
            <div>
              <label className="radial-gradient-label">Color One:</label>
              <input
                className="radial-gradient-input"
                placeholder="Start %"
                onChange={(e) => setRadialStartOne(e.target.value)}
              />
              <input
                className="radial-gradient-input"
                placeholder="Stop %"
                onChange={(e) => setRadialStopOne(e.target.value)}
              />
            </div>
            <div>
              <label className="radial-gradient-label">Color Two:</label>
              <input
                className="radial-gradient-input"
                placeholder="Start %"
                onChange={(e) => setRadialStartTwo(e.target.value)}
              />
              <input
                className="radial-gradient-input"
                placeholder="Stop %"
                onChange={(e) => setRadialStopTwo(e.target.value)}
              />
            </div>
            <div>
              <label className="radial-gradient-label">Color Three:</label>
              <input
                className="radial-gradient-input"
                placeholder="Start %"
                onChange={(e) => setRadialStartThree(e.target.value)}
              />
              <input
                className="radial-gradient-input"
                placeholder="Stop %"
                onChange={(e) => setRadialStopThree(e.target.value)}
              />
            </div>
            <h2 className="radial-gradient-subtitle">Choose a size:</h2>
            <label className="radial-gradient-label">Size:</label>
            <select
              value={radialSize}
              onChange={(e) => setRadialSize(e.target.value)}
            >
              <option value="closest-side">Closest Side</option>
              <option value="closest-corner">Closest Corner</option>
              <option value="farthest-side">Farthest Side</option>
              <option value="farthest-corner">Farthest Corner</option>
            </select>
            <h2 className="radial-gradient-subtitle">Choose a position:</h2>
            <label className="radial-gradient-label">Position</label>
            <select
              value={radialPosition}
              onChange={(e) => setRadialPosition(e.target.value)}
            >
              <option value="Left Top">Left Top</option>
              <option value="Left Center">Left Center</option>
              <option value="Left Bottom">Left Bottom</option>
              <option value="Right Top">Right Top</option>
              <option value="Right Center">Right Center</option>
              <option value="Right Bottom">Right Bottom</option>
              <option value="Center Top">Center Top</option>
              <option value="Center Center">Center Center</option>
              <option value="Center Bottom">Center Bottom</option>
            </select>
          </div>
          <div className="radial-gradient-div">
            <div
              className="radial-gradient"
              style={{
                backgroundImage: `radial-gradient(${radialSize} ${shape} at ${radialPosition}, ${radialOne} ${radialStartOne}% ${radialStopOne}%, ${radialTwo} ${radialStartTwo}% ${radialStopTwo}%, ${radialThree} ${radialStartThree}% ${radialStopThree}%)`,
              }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}

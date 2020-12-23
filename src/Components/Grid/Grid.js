import React, { useState } from "react";
import "./Grid.scss";

export default function Grid() {
  const [gridColumnGap, setGridColumnGap] = useState();
  const [gridRowGap, setGridRowGap] = useState();
  const [oneGridColumnStart, setOneGridColumnStart] = useState(1);
  const [oneGridRowStart, setOneGridRowStart] = useState(1);
  const [oneGridColumnEnd, setOneGridColumnEnd] = useState(2);
  const [oneGridRowEnd, setOneGridRowEnd] = useState(2);
  const [twoGridColumnStart, setTwoGridColumnStart] = useState(2);
  const [twoGridRowStart, setTwoGridRowStart] = useState(1);
  const [twoGridColumnEnd, setTwoGridColumnEnd] = useState(3);
  const [twoGridRowEnd, setTwoGridRowEnd] = useState(2);
  const [threeGridColumnStart, setThreeGridColumnStart] = useState(3);
  const [threeGridRowStart, setThreeGridRowStart] = useState(1);
  const [threeGridColumnEnd, setThreeGridColumnEnd] = useState(4);
  const [threeGridRowEnd, setThreeGridRowEnd] = useState(2);
  const [fourGridColumnStart, setFourGridColumnStart] = useState(1);
  const [fourGridRowStart, setFourGridRowStart] = useState(2);
  const [fourGridColumnEnd, setFourGridColumnEnd] = useState(2);
  const [fourGridRowEnd, setFourGridRowEnd] = useState(3);
  const [fiveGridColumnStart, setFiveGridColumnStart] = useState(2);
  const [fiveGridRowStart, setFiveGridRowStart] = useState(2);
  const [fiveGridColumnEnd, setFiveGridColumnEnd] = useState(3);
  const [fiveGridRowEnd, setFiveGridRowEnd] = useState(3);
  const [gridColumnGapCard, setGridColumnGapCard] = useState(false);
  const [gridRowGapCard, setGridRowGapCard] = useState(false);
  const [gridRowStartCard, setGridRowStartCard] = useState(false);
  const [gridColumnStartCard, setGridColumnStartCard] = useState(false);
  const [gridRowEndCard, setGridRowEndCard] = useState(false);
  const [gridColumnEndCard, setGridColumnEndCard] = useState(false);

  function toggleGridColumnGapCard() {
    setGridColumnGapCard(!gridColumnGapCard);
  }

  function toggleGridRowGapCard() {
    setGridRowGapCard(!gridRowGapCard);
  }

  function toggleGridRowStartCard() {
    setGridRowStartCard(!gridRowStartCard);
  }

  function toggleGridColumnStartCard() {
    setGridColumnStartCard(!gridColumnStartCard);
  }

  function toggleGridRowEndCard() {
    setGridRowEndCard(!gridRowEndCard);
  }

  function toggleGridColumnEndCard() {
    setGridColumnEndCard(!gridColumnEndCard);
  }

  return (
    <div className="grid-main">
      <div className="grid-introduction">
        <div className="grid-description-div">
          <h1>Grid</h1>
          <p>
            Display: Grid, is a grid based layout with rows and columns. A grid
            element is a parent element with one or more children. The vertical
            lines are called columns and the horizontal lines are called rows.
            The spaces between are called gaps. Click on any of the properties
            in the pracitce below for more information.
          </p>
        </div>
        <div className="grid-diagram-div">
          <img
            className="grid-diagram"
            src="https://www.w3schools.com/css/grid_lines.png"
          />
        </div>
      </div>

      <div className="grid-practice-div">
        <div className="grid-properties">
          <div className="grid-input-div">
            <label
              className="grid-label"
              onClick={() => toggleGridColumnGapCard()}
            >
              Grid Column Gap:
            </label>
            <input
              className="grid-input"
              onChange={(e) => setGridColumnGap(e.target.value)}
              placeholder="Enter number here"
            />
          </div>
          <div className="grid-input-div">
            <label className="grid-label" onClick={() => toggleGridRowGapCard}>
              Grid Row Gap:
            </label>
            <input
              className="grid-input"
              onChange={(e) => setGridRowGap(e.target.value)}
              placeholder="Enter number here"
            />
          </div>
          <div className="grid-box-group">
            <div className="grid-box">
              <h2 className="grid-subtitle">Box 1</h2>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnStartCard()}
                >
                  Grid Column Start:
                </label>
                <select
                  className="grid-select"
                  value={oneGridColumnStart}
                  onChange={(e) => setOneGridColumnStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnEndCard}
                >
                  Grid Column End:
                </label>
                <select
                  className="grid-select"
                  value={oneGridColumnEnd}
                  onChange={(e) => setOneGridColumnEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowStartCard()}
                >
                  Grid Row Start:
                </label>
                <select
                  className="grid-select"
                  value={oneGridRowStart}
                  onChange={(e) => setOneGridRowStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowEndCard()}
                >
                  Grid Row End:
                </label>
                <select
                  className="grid-select"
                  value={oneGridRowEnd}
                  onChange={(e) => setOneGridRowEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="grid-box">
              <h2 className="grid-subtitle">Box 2</h2>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnStartCard()}
                >
                  Grid Column Start:
                </label>
                <select
                  className="grid-select"
                  value={twoGridColumnStart}
                  onChange={(e) => setTwoGridColumnStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnEndCard()}
                >
                  Grid Column End:
                </label>
                <select
                  className="grid-select"
                  value={twoGridColumnEnd}
                  onChange={(e) => setTwoGridColumnEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => gridRowStartCard()}
                >
                  Grid Row Start:
                </label>
                <select
                  className="grid-select"
                  value={twoGridRowStart}
                  onChange={(e) => setTwoGridRowStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowEndCard}
                >
                  Grid Row End:
                </label>
                <select
                  className="grid-select"
                  value={twoGridRowEnd}
                  onChange={(e) => setTwoGridRowEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid-box-group">
            <div className="grid-box">
              <h2 className="grid-subtitle">Box 3</h2>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnStartCard()}
                >
                  Grid Column Start:
                </label>
                <select
                  className="grid-select"
                  value={threeGridColumnStart}
                  onChange={(e) => setThreeGridColumnStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnEndCard()}
                >
                  Grid Column End:
                </label>
                <select
                  className="grid-select"
                  value={threeGridColumnEnd}
                  onChange={(e) => setThreeGridColumnEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowStartCard()}
                >
                  Grid Row Start:
                </label>
                <select
                  className="grid-select"
                  value={threeGridRowStart}
                  onChange={(e) => setThreeGridRowStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowEndCard()}
                >
                  Grid Row End:
                </label>
                <select
                  className="grid-select"
                  value={threeGridRowEnd}
                  onChange={(e) => setThreeGridRowEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="grid-box">
              <h2 className="grid-subtitle">Box 4</h2>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnStartCard}
                >
                  Grid Column Start:
                </label>
                <select
                  className="grid-select"
                  value={fourGridColumnStart}
                  onChange={(e) => setFourGridColumnStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnEndCard()}
                >
                  Grid Column End:
                </label>
                <select
                  value={fourGridColumnEnd}
                  onChange={(e) => setFourGridColumnEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowStartCard()}
                >
                  Grid Row Start:
                </label>
                <select
                  className="grid-select"
                  value={fourGridRowStart}
                  onChange={(e) => setFourGridRowStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowEndCard()}
                >
                  Grid Row End:
                </label>
                <select
                  value={fourGridRowEnd}
                  onChange={(e) => setFourGridRowEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid-box-group">
            <div className="grid-box">
              <h2 className="grid-subtitle">Box 5</h2>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnStartCard()}
                >
                  Grid Column Start:
                </label>
                <select
                  className="grid-select"
                  value={fiveGridColumnStart}
                  onChange={(e) => setFiveGridColumnStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnEndCard()}
                >
                  Grid Column End:
                </label>
                <select
                  className="grid-select"
                  value={fiveGridColumnEnd}
                  onChange={(e) => setFiveGridColumnEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridRowStartCard()}
                >
                  Grid Row Start:
                </label>
                <select
                  className="grid-select"
                  value={fiveGridRowStart}
                  onChange={(e) => setFiveGridRowStart(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="grid-input-div">
                <label
                  className="grid-label"
                  onClick={() => toggleGridColumnEndCard()}
                >
                  Grid Row End:
                </label>
                <select
                  className="grid-select"
                  value={fiveGridRowEnd}
                  onChange={(e) => setFiveGridRowEnd(e.target.value)}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-practice">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 100px)",
              gridTemplateRows: "repeat(5, 100px",
              gridColumnGap: `${gridColumnGap}px`,
              gridRowGap: `${gridRowGap}px`,
              height: "50%",
              width: "100%",
              border: "solid"

            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gridColumnStart: `${oneGridColumnStart}`,
                gridColumnEnd: `${oneGridColumnEnd}`,
                gridRowStart: `${oneGridRowStart}`,
                gridRowEnd: `${oneGridRowEnd}`,
                border: "solid 1px black",
              }}
            >
              1
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gridColumnStart: `${twoGridColumnStart}`,
                gridColumnEnd: `${twoGridColumnEnd}`,
                gridRowStart: `${twoGridRowStart}`,
                gridRowEnd: `${twoGridRowEnd}`,
                border: "solid 1px black",
              }}
            >
              2
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gridColumnStart: `${threeGridColumnStart}`,
                gridColumnEnd: `${threeGridColumnEnd}`,
                gridRowStart: `${threeGridRowStart}`,
                gridRowEnd: `${threeGridRowEnd}`,
                border: "solid 1px black",
              }}
            >
              3
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gridColumnStart: `${fourGridColumnStart}`,
                gridColumnEnd: `${fourGridColumnEnd}`,
                gridRowStart: `${fourGridRowStart}`,
                gridRowEnd: `${fourGridRowEnd}`,
                border: "solid 1px black",
              }}
            >
              4
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gridColumnStart: `${fiveGridColumnStart}`,
                gridColumnEnd: `${fiveGridColumnEnd}`,
                gridRowStart: `${fiveGridRowStart}`,
                gridRowEnd: `${fiveGridRowEnd}`,
                border: "solid 1px black",
              }}
            >
              5
            </div>
          </div>
        </div>
      </div>
      {/* <p>
        Grid-column-gap sets the gap between columns and grid-row-gap sets the
        gap between rows. The lines between columns are called column lines and
        the lines between rows are called row-lines. You can define where a grid
        items starts and ends using grid-column-start, grid-column-end,
        grid-row-start, and grid-row-end. Grid-template-rows and
        grid-template-columns let you define how many rows and columns there are
        and their height and width.
      </p> */}
    </div>
  );
}

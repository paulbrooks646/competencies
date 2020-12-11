import React, { useState } from "react";
import "./Flexbox.scss";

export default function Flexbox(props) {
  const [flexDirectionGray, setFlexDirectionGray] = useState();
  const [justifyContentGray, setJustifyContentGray] = useState();
  const [alignItemsGray, setAlignItemsGray] = useState();
  const [flexWrapGray, setFlexWrapGray] = useState();
  const [flexDirectionOrange, setFlexDirectionOrange] = useState();
  const [justifyContentOrange, setJustifyContentOrange] = useState();
  const [alignItemsOrange, setAlignItemsOrange] = useState();
  const [flexWrapOrange, setFlexWrapOrange] = useState();
  const [directionCard, setDirectionCard] = useState(false);
  const [wrapCard, setWrapCard] = useState(false);
  const [contentCard, setContentCard] = useState(false);
  const [itemsCard, setItemsCard] = useState(false);

  function toggleDirectionCard() {
    setDirectionCard(!directionCard);
  }

  function toggleWrapCard() {
    setWrapCard(!wrapCard);
  }

  function toggleContentCard() {
    setContentCard(!contentCard);
  }

  function toggleItemsCard() {
    setItemsCard(!itemsCard);
  }

  return (
    <div className="flexbox-main">
      <div className="flexbox-introduction">
        <h1>Flexbox</h1>
        <p className="flexbox-description">
          Flexbox makes it easier to design a flexible responsive layout
          structure than using float or positioning. You do this by setting the
          parent element's display to flex.
        </p>
      </div>
      <div className="flexbox-properties">
        <div className="flexbox-properties-introduction">
          <div className="flexbox-properties-description-div">
            <h2>Flexbox</h2>
            <p>
              The flex container has access to the following properties. Click
              on any of them for more details.
            </p>

            <h2
              className="flexbox-property-subtitle"
              onClick={() => toggleDirectionCard()}
            >
              Flex Direction
            </h2>
            <h2
              className="flexbox-property-subtitle"
              onClick={() => toggleWrapCard()}
            >
              Flex Wrap
            </h2>
            <h2
              className="flexbox-property-subtitle"
              onClick={() => toggleContentCard()}
            >
              Justify Content
            </h2>
            <h2
              className="flexbox-property-subtitle"
              onClick={() => toggleItemsCard()}
            >
              Align Items
            </h2>
          </div>
          <div className="flexbox-chart-div">
            <img
              className="flexbox-chart"
              src="https://dev.opera.com/articles/flexbox-basics/axis.png"
              alt="flexbox chart"
            />
          </div>
        </div>
        <div className="flexbox-practice">
          <div className="flex-inputs">
            <div className="flex-input-div">
              <label className="flex-label">Gray Box Flex Direction:</label>
              <select
                value={flexDirectionGray}
                onChange={(e) => setFlexDirectionGray(e.target.value)}
              >
                <option value="row">Row</option>
                <option value="row-reverse">Row Reverse</option>
                <option value="column">Column</option>
                <option value="column-reverse">Column Reverse</option>
              </select>
            </div>
            <div className="flex-input-div">
              <label className="flex-label">Gray Box Justify Content:</label>
              <select
                value={justifyContentGray}
                onChange={(e) => setJustifyContentGray(e.target.value)}
              >
                <option value="flex-start">Flex Start</option>
                <option value="flex-end">Flex End</option>
                <option value="Center">Center</option>
                <option value="space-evenly">Space Evenly</option>
                <option value="space-around">Space Around</option>
                <option value="space-between">Space Between</option>
              </select>
            </div>
            <div className="flex-input-div">
              <label className="flex-label">Gray Box Align Items:</label>
              <select
                value={alignItemsGray}
                onChange={(e) => setAlignItemsGray(e.target.value)}
              >
                <option value="flex-start">Flex Start</option>
                <option value="flex-end">Flex End</option>
                <option value="center">Center</option>
              </select>
            </div>
            <div className="flex-input-div">
              <label className="flex-label">Gray Box Flex Wrap:</label>
              <select
                value={flexWrapGray}
                onChange={(e) => setFlexWrapGray(e.target.value)}
              >
                <option value="nowrap">No Wrap</option>
                <option value="wrap">Wrap</option>
                <option value="wrap-reverse">Wrap Reverse</option>
              </select>
            </div>
            <div className="flex-input-div">
              <label className="flex-label">Orange Box Flex Direction:</label>
              <select
                value={flexDirectionOrange}
                onChange={(e) => setFlexDirectionOrange(e.target.value)}
              >
                <option value="row">Row</option>
                <option value="row-reverse">Row Reverse</option>
                <option value="column">Column</option>
                <option value="column-reverse">Column Reverse</option>
              </select>
            </div>
            <div className="flex-input-div">
              <label className="flex-label">Orange Box justify Content:</label>
              <select
                value={justifyContentOrange}
                onChange={(e) => setJustifyContentOrange(e.target.value)}
              >
                <option value="flex-start">Flex Start</option>
                <option value="flex-end">Flex End</option>
                <option value="Center">Center</option>
                <option value="space-evenly">Space Evenly</option>
                <option value="space-around">Space Around</option>
                <option value="space-between">Space Between</option>
              </select>
            </div>
            <div className="flex-input-div">
              <label className="flex-label">Orange Box Align Items:</label>
              <select
                value={alignItemsOrange}
                onChange={(e) => setAlignItemsOrange(e.target.value)}
              >
                <option value="flex-start">Flex Start</option>
                <option value="flex-end">Flex End</option>
                <option value="center">Center</option>
              </select>
            </div>
            <div className="flex-input-div">
              <label className="flex-label">Orange Box Flex Wrap:</label>
              <select
                value={flexWrapOrange}
                onChange={(e) => setFlexWrapOrange(e.target.value)}
              >
                <option value="nowrap">No Wrap</option>
                <option value="wrap">Wrap</option>
                <option value="wrap-reverse">Wrap Reverse</option>
              </select>
            </div>
          </div>
          <div className="flexbox-box-div">
            <div
              className="flexbox-large-box"
              style={{
                flexDirection: `${flexDirectionGray}`,
                justifyContent: `${justifyContentGray}`,
                alignItems: `${alignItemsGray}`,
                flexWrap: `${flexWrapGray}`,
              }}
            >
              <div
                className="flexbox-medium-box"
                style={{
                    backgroundColor: "orange",
                  justifyContent: `${justifyContentOrange}`,
                  flexDirection: `${flexDirectionOrange}`,
                  alignItems: `${alignItemsOrange}`,
                  flexWrap: `${flexWrapOrange}`,
                }}
              >
                <div
                  className="flexbox-small-box"
                  style={{ backgroundColor: "green" }}
                ></div>
                <div className="tiny" style={{ backgroundColor: "blue" }}></div>
                <div
                  className="tiny"
                  style={{ backgroundColor: "yellow" }}
                ></div>
              </div>
              <div className="small" style={{ backgroundColor: "red" }}></div>
              <div className="small" style={{ backgroundColor: "black" }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>
              flex-direction Flex-direction, flex-wrap, justify-content and
              align-items are commonly used flex properties. The flex-direction
              property defines whether you want the children elements to go left
              to right (row, this is the default), right to left (row-reverse),
              top to bottom (column) or bottom to top (column-reverse).
              Flex-wrap determines whether the children will wrap to the next
              line if the combined height or width are greater than the height
              or width of the parent container. Justify-content is used to align
              the flex-items along the main axis. (horizontally if the
              flex-direction is row, or vertically if the flex-direction is
              column. Align items is used to align flex items on the cross axis.
              (vertically if the fex-direction is row, or horizontally if the
              flex-direction is column. Our example below will allow you to see
              and experiment with some of the options for justify-content and
              align items.
            </p> */}
    </div>
  );
}

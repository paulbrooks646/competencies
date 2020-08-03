import React, { useState } from 'react'

export default function Flexbox(props) {

    const [flexDirectionGray, setFlexDirectionGray] = useState()
    const [justifyContentGray, setJustifyContentGray] = useState()
    const [alignItemsGray, setAlignItemsGray] = useState()
    const [flexWrapGray, setFlexWrapGray] = useState()
    const [flexDirectionOrange, setFlexDirectionOrange] = useState()
    const [justifyContentOrange, setJustifyContentOrange] = useState()
    const [alignItemsOrange, setAlignItemsOrange] = useState()
    const [flexWrapOrange, setFlexWrapOrange] = useState()
    const [gridColumnGap, setGridColumnGap] = useState()
    const [gridRowGap, setGridRowGap] = useState()
    const [oneGridColumnStart, setOneGridColumnStart] = useState(1)
    const [oneGridRowStart, setOneGridRowStart] = useState(1)
    const [oneGridColumnEnd, setOneGridColumnEnd] = useState(2)
    const [oneGridRowEnd, setOneGridRowEnd] = useState(2)
    const [twoGridColumnStart, setTwoGridColumnStart] = useState(2)
    const [twoGridRowStart, setTwoGridRowStart] = useState(2)
    const [twoGridColumnEnd, setTwoGridColumnEnd] = useState(3)
    const [twoGridRowEnd, setTwoGridRowEnd] = useState(3)
    const [threeGridColumnStart, setThreeGridColumnStart] = useState(3)
    const [threeGridRowStart, setThreeGridRowStart] = useState(3)
    const [threeGridColumnEnd, setThreeGridColumnEnd] = useState(4)
    const [threeGridRowEnd, setThreeGridRowEnd] = useState(4)
    const [fourGridColumnStart, setFourGridColumnStart] = useState(1)
    const [fourGridRowStart, setFourGridRowStart] = useState(4)
    const [fourGridColumnEnd, setFourGridColumnEnd] = useState(2)
    const [fourGridRowEnd, setFourGridRowEnd] = useState(5)
    const [fiveGridColumnStart, setFiveGridColumnStart] = useState(2)
    const [fiveGridRowStart, setFiveGridRowStart] = useState(5)
    const [fiveGridColumnEnd, setFiveGridColumnEnd] = useState(3)
    const [fiveGridRowEnd, setFiveGridRowEnd] = useState(6)

    return (
        <div>
            <div style={{ display: "flex", height: "1100px", borderBottom: "solid 1px black", alignItems: "center" }}>
                <div id="flex" style={{ width: "40%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                    <h2>Flexbox</h2>
                    <p style={{ width: "90%" }}>Flexbox makes it easier to design a flexible responsive layout structure than using float or positioning. You do this by setting the parent element's display to flex. The flex container has access to certain properties. Flex-direction, flex-wrap, justify-content and align-items are commonly used flex properties. The flex-direction property defines whether you want the children elements to go left to right (row, this is the default), right to left (row-reverse), top to bottom (column) or bottom to top (column-reverse). Flex-wrap determines whether the children will wrap to the next line if the combined height or width are greater than the height or width of the parent container. Justify-content is used to align the flex-items along the main axis. (horizontally if the flex-direction is row, or vertically if the flex-direction is column. Align items is used to align flex items on the cross axis. (vertically if the fex-direction is row, or horizontally if the flex-direction is column. Our example below will allow you to see and experiment with some of the options for justify-content and align items.</p>
                    <label>Gray Box Flex Direction</label>
                    <select
                        value={flexDirectionGray}
                        onChange={e => setFlexDirectionGray(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="row">Row</option>
                        <option value="row-reverse">Row Reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column Reverse</option>
                    </select>
                    <label>Gray Box justify Content</label>
                    <select
                        value={justifyContentGray}
                        onChange={e => setJustifyContentGray(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="Center">Center</option>
                        <option value="space-evenly">Space Evenly</option>
                        <option value="space-around">Space Around</option>
                        <option value="space-between">Space Between</option>
                    </select>
                    <label>Gray Box Align Items</label>
                    <select
                        value={alignItemsGray}
                        onChange={e => setAlignItemsGray(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                    </select>
                    <label>Gray Box Flex Wrap</label>
                    <select
                        value={flexWrapGray}
                        onChange={e => setFlexWrapGray(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="nowrap">No Wrap</option>
                        <option value="wrap">Wrap</option>
                        <option value="wrap-reverse">Wrap Reverse</option>
                    </select>
                    <label>Orange Box Flex Direction</label>
                    <select
                        value={flexDirectionOrange}
                        onChange={e => setFlexDirectionOrange(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="row">Row</option>
                        <option value="row-reverse">Row Reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column Reverse</option>
                    </select>
                    <label>Orange Box justify Content</label>
                    <select
                        value={justifyContentOrange}
                        onChange={e => setJustifyContentOrange(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="Center">Center</option>
                        <option value="space-evenly">Space Evenly</option>
                        <option value="space-around">Space Around</option>
                        <option value="space-between">Space Between</option>
                    </select>
                    <label>Orange Box Align Items</label>
                    <select
                        value={alignItemsOrange}
                        onChange={e => setAlignItemsOrange(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                    </select>
                    <label>Orange Box Flex Wrap</label>
                    <select
                        value={flexWrapOrange}
                        onChange={e => setFlexWrapOrange(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="nowrap">No Wrap</option>
                        <option value="wrap">Wrap</option>
                        <option value="wrap-reverse">Wrap Reverse</option>
                    </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", width: "50%", height: "1100px" }}>
                    <div>
                        <img src="https://dev.opera.com/articles/flexbox-basics/axis.png" />
                    </div>
                    <div className="medium" style={{ display: `flex`, flexDirection: `${flexDirectionGray}`, justifyContent: `${justifyContentGray}`, alignItems: `${alignItemsGray}`, flexWrap: `${flexWrapGray}`, width: "100%", height: "50%", backgroundColor: "gray", marginLeft: "5%" }}>
                        <div className="small" style={{ display: `flex`, backgroundColor: "orange", justifyContent: `${justifyContentOrange}`, flexDirection: `${flexDirectionOrange}`, alignItems: `${alignItemsOrange}`, flexWrap: `${flexWrapOrange}` }}>
                            <div className="tiny" style={{ backgroundColor: "green" }}>
                            </div>
                            <div className="tiny" style={{ backgroundColor: "blue" }}></div>
                            <div className="tiny" style={{ backgroundColor: "yellow" }}></div>
                        </div>
                        <div className="small" style={{ backgroundColor: "red" }}>
                        </div>
                        <div className="small" style={{ backgroundColor: "black" }}>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", alignItems: "center"}}>

                    <div style={{display: "flex", justifyContent: "space-evenly", width: "100%", alignItems: "center"}}>
                    <div style={{width: "40%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h2>Grid</h2>
                    <p style={{ width: "90%" }}>Display: Grid, offers a grid based layout system, with rows and columns, which like flexbox, makes it easer to design webpages without using floats or positioning. A grid element consists of a parent element with one or more child elements. The vertical lines of grid items are called columns and the horizontal lines of grid items are called rows. The spaces between each row and column are called gaps. Grid-column-gap sets the gap between columns and grid-row-gap sets the gap between rows. Grid gap can be used to set both at once. The lines between columns are called column lines and the lines between rows are called row-lines. You can define where a grid items starts and ends using grid-column-start, grid-column-end, grid-row-start, and grid-row-end. Grid-template-rows and grid-template-columns let you define how many rows and columns there are and their height and width. For out example the grid will be three columns and five rows and contain 5 items.</p>
                    </div>
                    <div style={{width: "60%"}}>
                    <img style={{ width: "450px" }} src="https://www.w3schools.com/css/grid_lines.png" />
                    </div>
                    </div>

                    <div style={{display: "flex", justifyContent: "space-evenly", width: "100%", marginTop: "30px", alignItems: "center"}}>
                    <div style={{display: "flex", alignItems: "space-evenly", height: "100%"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px"}}>
                    <label>Grid Column Gap</label>
                    <input
                        onChange={e => setGridColumnGap(e.target.value)}
                        placeholder="Enter number here" />
                    <label>Grid Row Gap</label>
                    <input
                        onChange={e => setGridRowGap(e.target.value)}
                        placeholder="Enter number here"
                    />
                    <label>Box 1 Grid Column Start</label>
                    <select
                        value={oneGridColumnStart}
                        onChange={e => setOneGridColumnStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Box 1 Grid Column End</label>
                    <select
                        value={oneGridColumnEnd}
                        onChange={e => setOneGridColumnEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label>Box 1 Grid Row Start</label>
                    <select
                        value={oneGridRowStart}
                        onChange={e => setOneGridRowStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Box 1 Grid Row End</label>
                    <select
                        value={oneGridRowEnd}
                        onChange={e => setOneGridRowEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <label>Box 2 Grid Column Start</label>
                    <select
                        value={twoGridColumnStart}
                        onChange={e => setTwoGridColumnStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Box 2 Grid Column End</label>
                    <select
                        value={twoGridColumnEnd}
                        onChange={e => setTwoGridColumnEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label>Box 2 Grid Row Start</label>
                    <select
                        value={twoGridRowStart}
                        onChange={e => setTwoGridRowStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Box 2 Grid Row End</label>
                    <select
                        value={twoGridRowEnd}
                        onChange={e => setTwoGridRowEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <label>Box 3 Grid Column Start</label>
                    <select
                        value={threeGridColumnStart}
                        onChange={e => setThreeGridColumnStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Box 3 Grid Column End</label>
                    <select
                        value={threeGridColumnEnd}
                        onChange={e => setThreeGridColumnEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label>Box 3 Grid Row Start</label>
                    <select
                        value={threeGridRowStart}
                        onChange={e => setThreeGridRowStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Box 3 Grid Row End</label>
                    <select
                        value={threeGridRowEnd}
                        onChange={e => setThreeGridRowEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <label>Box 4 Grid Column Start</label>
                    <select
                        value={fourGridColumnStart}
                        onChange={e => setFourGridColumnStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Box 4 Grid Column End</label>
                    <select
                        value={fourGridColumnEnd}
                        onChange={e => setFourGridColumnEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label>Box 4 Grid Row Start</label>
                    <select
                        value={fourGridRowStart}
                        onChange={e => setFourGridRowStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Box 4 Grid Row End</label>
                    <select
                        value={fourGridRowEnd}
                        onChange={e => setFourGridRowEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <label>Box 5 Grid Column Start</label>
                    <select
                        value={fiveGridColumnStart}
                        onChange={e => setFiveGridColumnStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <label>Box 5 Grid Column End</label>
                    <select
                        value={fiveGridColumnEnd}
                        onChange={e => setFiveGridColumnEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <label>Box 5 Grid Row Start</label>
                    <select
                        value={fiveGridRowStart}
                        onChange={e => setFiveGridRowStart(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label>Box 5 Grid Row End</label>
                    <select
                        value={fiveGridRowEnd}
                        onChange={e => setFiveGridRowEnd(e.target.value)}
                        style={{ marginBottom: "10px" }}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gridTemplateRows: "repeat(5, 100px", gridColumnGap: `${gridColumnGap}px`, gridRowGap: `${gridRowGap}px`, height: "100%"}}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${oneGridColumnStart}`, gridColumnEnd: `${oneGridColumnEnd}`, gridRowStart: `${oneGridRowStart}`, gridRowEnd: `${oneGridRowEnd}`, border: "solid 1px black" }}>1</div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${twoGridColumnStart}`, gridColumnEnd: `${twoGridColumnEnd}`, gridRowStart: `${twoGridRowStart}`, gridRowEnd: `${twoGridRowEnd}`, border: "solid 1px black" }}>2</div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${threeGridColumnStart}`, gridColumnEnd: `${threeGridColumnEnd}`, gridRowStart: `${threeGridRowStart}`, gridRowEnd: `${threeGridRowEnd}`, border: "solid 1px black" }}>3</div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${fourGridColumnStart}`, gridColumnEnd: `${fourGridColumnEnd}`, gridRowStart: `${fourGridRowStart}`, gridRowEnd: `${fourGridRowEnd}`, border: "solid 1px black" }}>4</div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${fiveGridColumnStart}`, gridColumnEnd: `${fiveGridColumnEnd}`, gridRowStart: `${fiveGridRowStart}`, gridRowEnd: `${fiveGridRowEnd}`, border: "solid 1px black" }}>5</div>
                        </div>
                </div>
                </div>
        </div>


    )
}
import React, {useState} from 'react'

export default function FloatDisplay(props) {

    const [float, setFloat] = useState()
    const [display, setDisplay] = useState()
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
    const [twoGridRowStart, setTwoGridRowStart] = useState(1)
    const [twoGridColumnEnd, setTwoGridColumnEnd] = useState(3)
    const [twoGridRowEnd, setTwoGridRowEnd] = useState(2)
    const [threeGridColumnStart, setThreeGridColumnStart] = useState(3)
    const [threeGridRowStart, setThreeGridRowStart] = useState(1)
    const [threeGridColumnEnd, setThreeGridColumnEnd] = useState(4)
    const [threeGridRowEnd, setThreeGridRowEnd] = useState(2)
    const [fourGridColumnStart, setFourGridColumnStart] = useState(1)
    const [fourGridRowStart, setFourGridRowStart] = useState(2)
    const [fourGridColumnEnd, setFourGridColumnEnd] = useState(2)
    const [fourGridRowEnd, setFourGridRowEnd] = useState(3)
    const [fiveGridColumnStart, setFiveGridColumnStart] = useState(2)
    const [fiveGridRowStart, setFiveGridRowStart] = useState(2)
    const [fiveGridColumnEnd, setFiveGridColumnEnd] = useState(3)
    const [fiveGridRowEnd, setFiveGridRowEnd] = useState(3)



    
    return (
        <div>
            <h1>Float & Display</h1>
            <p style={{borderBottom: "solid 1px black", padding: "10px"}}>In CSS the float and display properties affect the layout and visual aspect of a page.</p>
            <div style={{display: "flex", justifyContent: "flex-start", borderBottom: "solid 1px black"}}>
                <div style={{width: "40%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h2>Float</h2>
                    <p style={{width: "90%"}}>The float property in CSS causes an element to float to either the left or right side of its container, allowing other elements to wrap around it. It is removed from the normal flow of the page.</p>
                    <label>Float:</label>
                    <select
                        value={float}
                        onChange={e => setFloat(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="none">None</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div style={{ width: "55%"}}>
                    <img src="data:image/jpeg;base64,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" style={{width: "200px", height: "200px", float: `${float}`}}/>
                    <p>Give the feather a float property and see what happens!</p>
                </div>
            </div>
            <div style={{display: "flex", width: "100vw", height: "500px", borderBottom: "solid 1px black"}}>
                <div style={{width: "40%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                    <h2>Display</h2>
                    <p style={{width: "90%"}}>In CSS, the display property specifies the display behavior of an element. The inline value displays the element inline and negates all height and width properties. The block value displays the element as a block element, it will start on a new line and take up the entire width. The contents value makes the container disappear displaying only the contents inside. It moves any children element a level up in the DOM. Inline-block is displayed like an inline element but is able to receive height and width values. Display none removes the element along with its children. The Flex and Grid values will be explained in their own section.</p>
                    <label style={{}}>Span 2 Display:</label>
                    <select
                        value={display}
                        onChange={e => setDisplay(e.target.value)}
                        style={{marginBottom: "10px", marginTop: "0px"}}>
                            <option value="inline">Inline</option>
                            <option value="block">Block</option>
                            <option value="contents">Contents</option>
                            <option value="inline-block">Inline Block</option>
                            <option value="none">None</option>
                    </select>
                </div>
            <div style={{width: "60%", position: "relative", top: "33%"}}>
                <div>
                    <span style={{marginRight: "10px"}}>Span 1</span>
                    <span style={{display: `${display}`, backgroundColor: "red", border: "solid 1px black", marginRight: "10px"}}>Span 2</span>
                    <span>Span 3</span>
                </div>
                <p style={{position: "relative", top: "20%"}}>Look what happens when you give Span 2 different display values.</p>
            </div>
        </div>
        <div style={{display: "flex", height: "1100px", borderBottom: "solid 1px black", alignItems: "center"}}>
            <div id="flex" style={{width: "40%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
                <h2>Flexbox</h2>
                <p style={{width: "90%"}}>Flexbox makes it easier to design a flexible responsive layout structure than using float or positioning. You do this by setting the parent element's display to flex. The flex container has access to certain properties. Flex-direction, flex-wrap, justify-content and align-items are commonly used flex properties. The flex-direction property defines whether you want the children elements to go left to right (row, this is the default), right to left (row-reverse), top to bottom (column) or bottom to top (column-reverse). Flex-wrap determines whether the children will wrap to the next line if the combined height or width are greater than the height or width of the parent container. Justify-content is used to align the flex-items along the main axis. (horizontally if the flex-direction is row, or vertically if the flex-direction is column. Align items is used to align flex items on the cross axis. (vertically if the fex-direction is row, or horizontally if the flex-direction is column. Our example below will allow you to see and experiment with some of the options for justify-content and align items.</p>
                <label>Gray Box Flex Direction</label>
                    <select
                        value={flexDirectionGray}
                        onChange={e => setFlexDirectionGray(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="row">Row</option>
                        <option value="row-reverse">Row Reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column Reverse</option>
                    </select>
                    <label>Gray Box justify Content</label>
                    <select
                        value={justifyContentGray}
                        onChange={e => setJustifyContentGray(e.target.value)}
                        style={{marginBottom: "10px"}}>
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
                        style={{marginBottom: "10px"}}>
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                    </select>
                    <label>Gray Box Flex Wrap</label>
                    <select
                        value={flexWrapGray}
                        onChange={e => setFlexWrapGray(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="nowrap">No Wrap</option>
                        <option value="wrap">Wrap</option>
                        <option value="wrap-reverse">Wrap Reverse</option>
                    </select>
                    <label>Orange Box Flex Direction</label>
                    <select
                        value={flexDirectionOrange}
                        onChange={e => setFlexDirectionOrange(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="row">Row</option>
                        <option value="row-reverse">Row Reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column Reverse</option>
                    </select>
                    <label>Orange Box justify Content</label>
                    <select
                        value={justifyContentOrange}
                        onChange={e => setJustifyContentOrange(e.target.value)}
                        style={{marginBottom: "10px"}}>
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
                        style={{marginBottom: "10px"}}>
                        <option value="flex-start">Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                    </select>
                    <label>Orange Box Flex Wrap</label>
                    <select
                        value={flexWrapOrange}
                        onChange={e => setFlexWrapOrange(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="nowrap">No Wrap</option>
                        <option value="wrap">Wrap</option>
                        <option value="wrap-reverse">Wrap Reverse</option>
                    </select>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", width: "50%", height: "1100px"}}>
                <div>
                <img src="https://dev.opera.com/articles/flexbox-basics/axis.png"/>
                </div>
            <div className="medium" style={{display: `flex`, flexDirection: `${flexDirectionGray}`, justifyContent: `${justifyContentGray}`, alignItems: `${alignItemsGray}`, flexWrap: `${flexWrapGray}`, width: "100%", height: "50%", backgroundColor: "gray", marginLeft: "5%"}}>
                <div className="small" style={{display: `flex`, backgroundColor: "orange", justifyContent: `${justifyContentOrange}`, flexDirection: `${flexDirectionOrange}`, alignItems: `${alignItemsOrange}`, flexWrap: `${flexWrapOrange}`}}>
                    <div className="tiny" style={{backgroundColor: "green"}}>
                    </div>
                    <div className="tiny" style={{backgroundColor: "blue"}}></div>
                    <div className="tiny"  style={{backgroundColor: "yellow"}}></div>
                </div>
                <div className="small" style={{backgroundColor: "red"}}>
                </div>
                <div className="small"  style={{backgroundColor: "black"}}>
                </div>
            </div>
            </div>
        </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <div style={{width: "40%", height: "1850px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
                <h2>Grid</h2>
                <p style={{width: "90%"}}>Display: Grid, offers a grid based layout system, with rows and columns, which like flexbox, makes it easer to design webpages without using floats or positioning. A grid element consists of a parent element with one or more child elements. The vertical lines of grid items are called columns and the horizontal lines of grid items are called rows. The spaces between each row and column are called gaps. Grid-column-gap sets the gap between columns and grid-row-gap sets the gap between rows. Grid gap can be used to set both at once. The lines between columns are called column lines and the lines between rows are called row-lines. You can define where a grid items starts and ends using grid-column-start, grid-column-end, grid-row-start, and grid-row-end. Grid-template-rows and grid-template-columns let you define how many rows and columns there are and their height and width. For out example the grid will be three columns and five rows and contain 5 items.</p>
                <label>Grid Column Gap</label>
                <input
                    onChange={e => setGridColumnGap(e.target.value)}
                    placeholder="Enter number here"/>
                <label>Grid Row Gap</label>
                <input
                    onChange={e => setGridRowGap(e.target.value)}
                    placeholder="Enter number here"
                    />
                <label>Box 1 Grid Column Start</label>
                <select
                        value={oneGridColumnStart}
                        onChange={e => setOneGridColumnStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                </select>
                <label>Box 1 Grid Column End</label>
                    <select
                        value={oneGridColumnEnd}
                        onChange={e => setOneGridColumnEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select>
                    <label>Box 1 Grid Row Start</label>
                    <select
                        value={oneGridRowStart}
                        onChange={e => setOneGridRowStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                    </select>
                    <label>Box 1 Grid Row End</label>
                    <select
                        value={oneGridRowEnd}
                        onChange={e => setOneGridRowEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                    </select>
                    <label>Box 2 Grid Column Start</label>
                <select
                        value={twoGridColumnStart}
                        onChange={e => setTwoGridColumnStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                </select>
                <label>Box 2 Grid Column End</label>
                    <select
                        value={twoGridColumnEnd}
                        onChange={e => setTwoGridColumnEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select>
                    <label>Box 2 Grid Row Start</label>
                    <select
                        value={twoGridRowStart}
                        onChange={e => setTwoGridRowStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                    </select>
                    <label>Box 2 Grid Row End</label>
                    <select
                        value={twoGridRowEnd}
                        onChange={e => setTwoGridRowEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                    </select>
                    <label>Box 3 Grid Column Start</label>
                <select
                        value={threeGridColumnStart}
                        onChange={e => setThreeGridColumnStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                </select>
                <label>Box 3 Grid Column End</label>
                    <select
                        value={threeGridColumnEnd}
                        onChange={e => setThreeGridColumnEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select>
                    <label>Box 3 Grid Row Start</label>
                    <select
                        value={threeGridRowStart}
                        onChange={e => setThreeGridRowStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                    </select>
                    <label>Box 3 Grid Row End</label>
                    <select
                        value={threeGridRowEnd}
                        onChange={e => setThreeGridRowEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                    </select>
                    <label>Box 4 Grid Column Start</label>
                <select
                        value={fourGridColumnStart}
                        onChange={e => setFourGridColumnStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                </select>
                <label>Box 4 Grid Column End</label>
                    <select
                        value={fourGridColumnEnd}
                        onChange={e => setFourGridColumnEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select>
                    <label>Box 4 Grid Row Start</label>
                    <select
                        value={fourGridRowStart}
                        onChange={e => setFourGridRowStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                    </select>
                    <label>Box 4 Grid Row End</label>
                    <select
                        value={fourGridRowEnd}
                        onChange={e => setFourGridRowEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                    </select>
                    <label>Box 5 Grid Column Start</label>
                <select
                        value={fiveGridColumnStart}
                        onChange={e => setFiveGridColumnStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                </select>
                <label>Box 5 Grid Column End</label>
                    <select
                        value={fiveGridColumnEnd}
                        onChange={e => setFiveGridColumnEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select>
                    <label>Box 5 Grid Row Start</label>
                    <select
                        value={fiveGridRowStart}
                        onChange={e => setFiveGridRowStart(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                    </select>
                    <label>Box 5 Grid Row End</label>
                    <select
                        value={fiveGridRowEnd}
                        onChange={e => setFiveGridRowEnd(e.target.value)}
                        style={{marginBottom: "10px"}}>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                        <option value="five">5</option>
                        <option value="six">6</option>
                    </select>
            </div>
            <div style={{width: "55%", height: "1850px", display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "center"}}>
                <img style={{width: "500px"}} src="https://www.w3schools.com/css/grid_lines.png"/>
                <div style={{display: "grid", gridTemplateColumns: "repeat(3, 150px)", gridTemplateRows: "repeat(5, 150px", gridColumnGap: `${gridColumnGap}px`, gridRowGap: `${gridRowGap}px`, marginTop: "650px"}}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${oneGridColumnStart}`, gridColumnEnd: `${oneGridColumnEnd}`, gridRowStart: `${oneGridRowStart}`, gridRowEnd: `${oneGridRowEnd}`, border: "solid 1px black"}}>1</div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${twoGridColumnStart}`, gridColumnEnd: `${twoGridColumnEnd}`, gridRowStart: `${twoGridRowStart}`, gridRowEnd: `${twoGridRowEnd}`, border: "solid 1px black"}}>2</div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${threeGridColumnStart}`, gridColumnEnd: `${threeGridColumnEnd}`, gridRowStart: `${threeGridRowStart}`, gridRowEnd: `${threeGridRowEnd}`, border: "solid 1px black"}}>3</div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${fourGridColumnStart}`, gridColumnEnd: `${fourGridColumnEnd}`, gridRowStart: `${fourGridRowStart}`, gridRowEnd: `${fourGridRowEnd}`, border: "solid 1px black"}}>4</div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gridColumnStart: `${fiveGridColumnStart}`, gridColumnEnd: `${fiveGridColumnEnd}`, gridRowStart: `${fiveGridRowStart}`, gridRowEnd: `${fiveGridRowEnd}`, border: "solid 1px black"}}>5</div>
                    
            </div>
            </div>
            </div>
    </div>
    )
}
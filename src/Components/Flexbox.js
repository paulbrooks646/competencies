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


            
        </div>


    )
}
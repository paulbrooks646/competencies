import React, { useState } from 'react'
import "./Position.scss"

export default function Position() {

    const [boxOne, setBoxOne] = useState('static')
    const [boxTwo, setBoxTwo] = useState('static')
    const [boxThree, setBoxThree] = useState('static')
    const [boxFour, setBoxFour] = useState('static')
    const [topOne, setTopOne] = useState('0px')
    const [rightOne, setRightOne] = useState('0px')
    const [bottomOne, setBottomOne] = useState('0px')
    const [leftOne, setLeftOne] = useState('0px')
    const [topTwo, setTopTwo] = useState('0px')
    const [rightTwo, setRightTwo] = useState('0px')
    const [bottomTwo, setBottomTwo] = useState('0px')
    const [leftTwo, setLeftTwo] = useState('0px')
    const [topThree, setTopThree] = useState('0px')
    const [rightThree, setRightThree] = useState('0px')
    const [bottomThree, setBottomThree] = useState('0px')
    const [leftThree, setLeftThree] = useState('0px')
    const [topFour, setTopFour] = useState('0px')
    const [rightFour, setRightFour] = useState('0px')
    const [bottomFour, setBottomFour] = useState('0px')
    const [leftFour, setLeftFour] = useState('0px')
    const [zOne, setZOne] = useState(0)
    const [zTwo, setZTwo] = useState(0)
    const [zThree, setZThree] = useState(0)
    const [zFour, setZFour] = useState(0)

    return (
        <div className="position-main">
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Position</h1>
            <p style={{width: '80%'}}>The position property specifies the method of positioning used for an element. There are five different poistion values: Static, Relative, Fixed, Absolute and Sticky. Once an element has a position assigned (unless that position is static) it gains access to the Top, Right, Bottom and Left positioning properties. You can use different measurements for the properties including percentage of parent element, for today's purposes we will be using pixels. Static positioning is the default for all elements and is always positioned according to the normal flow of the page. If elements overlap whichever one has a higher z-index appears on top, if elements have the same z-index whichever one comes later in the code will appear on top. You can assign an element a z-index by using the z-index property. </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', position: 'relative', border: 'dashed 2px black', height: '100px'}}>
                    <div style={{backgroundColor: 'orange', width: '75px', height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: boxOne, top: `${topOne}px`, right: `${rightOne}px`, bottom: `${bottomOne}px`, left: `${leftOne}px`, zIndex: zOne}}>Box 1</div>
                </div>
                <div style={{width: '100%', display: 'flex', marginBottom: '20px'}}>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2>Relative</h2>
                <p style={{width: '90%'}}>When an element has relative positioining, using the Top, Right, Bottom and Left properties will adjust it from where it would normally be positioned.</p>
                </div>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h4>Box 1</h4>
                    <label>Position:</label>
                    <select
                        value={boxOne}
                        onChange={e => setBoxOne(e.target.value)}
                        style={{marginBottom: '10px'}}>
                        <option value='static'>Static</option>
                        <option value='relative'>Relative</option>
                        <option value='fixed'>Fixed</option>
                        <option value='absolute'>Absolute</option>
                        <option value='sticky'>Sticky</option>
                    </select>
                    <div>
                    <label style={{marginRight: '10px'}}>Top:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setTopOne(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Right:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setRightOne(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Bottom:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setBottomOne(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Left:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setLeftOne(e.target.value)}/>
                    </div>
                    <div>
                        <label style={{marginRight: '10px'}}>Z-index:</label>
                        <input
                            placeholder='Type number here'
                            onChange={e => setZOne(e.target.value)}/>
                    </div>
                </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', position: 'relative', border: 'dotted 2px black', height: '100px'}}>
                    <div style={{backgroundColor: 'blue', width: '75px', height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: boxTwo, top: `${topTwo}px`, right: `${rightTwo}px`, bottom: `${bottomTwo}px`, left: `${leftTwo}px`, zIndex: zTwo}}>Box 2</div>
                </div>
                <div style={{width: '100%', display: 'flex', marginBottom: '20px'}}>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2>Fixed</h2>
                <p style={{width: '90%'}}>When an element has fixed positioning using the Top, Right, Bottom, and Left properties positions it relative to the viewport. This means it stays in the same place even when the page is scrolled.</p>
                </div>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h4>Box 2</h4>
                    <label>Position:</label>
                    <select
                        value={boxTwo}
                        onChange={e => setBoxTwo(e.target.value)}
                        style={{marginBottom: '10px'}}>
                        <option value='static'>Static</option>
                        <option value='relative'>Relative</option>
                        <option value='fixed'>Fixed</option>
                        <option value='absolute'>Absolute</option>
                        <option value='sticky'>Sticky</option>
                    </select>
                    <div>
                    <label style={{marginRight: '10px'}}>Top:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setTopTwo(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Right:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setRightTwo(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Bottom:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setBottomTwo(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Left:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setLeftTwo(e.target.value)}/>
                    </div>
                    <div>
                        <label style={{marginRight: '10px'}}>Z-index:</label>
                        <input
                            placeholder='Type number here'
                            onChange={e => setZTwo(e.target.value)}/>
                    </div>
                </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', position: 'relative', border: 'solid 2px black', height: '100px'}}>
                    <div style={{backgroundColor: 'red', width: '75px', height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: boxThree, top: `${topThree}px`, right: `${rightThree}px`, bottom: `${bottomThree}px`, left: `${leftThree}px`, zIndex: zThree}}>Box 3</div>
                </div>
                <div style={{width: '100%', display: 'flex', marginBottom: '20px'}}>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2>Absolute</h2>
                <p style={{width: '90%'}}>An element with absolute positioning is positioned relative to its nearest positioned ancestor when using Top, Right, Bottom, or Left.</p>
                </div>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h4>Box 3</h4>
                    <label>Position:</label>
                    <select
                        value={boxThree}
                        onChange={e => setBoxThree(e.target.value)}
                        style={{marginBottom: '10px'}}>
                        <option value='static'>Static</option>
                        <option value='relative'>Relative</option>
                        <option value='fixed'>Fixed</option>
                        <option value='absolute'>Absolute</option>
                        <option value='sticky'>Sticky</option>
                    </select>
                    <div>
                    <label style={{marginRight: '10px'}}>Top:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setTopThree(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Right:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setRightThree(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Bottom:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setBottomThree(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Left:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setLeftThree(e.target.value)}/>
                    </div>
                    <div>
                        <label style={{marginRight: '10px'}}>Z-index:</label>
                        <input
                            placeholder='Type number here'
                            onChange={e => setZThree(e.target.value)}/>
                    </div>
                </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '90%', position: 'relative', border: 'double 3px black', height: '100px'}}>
                    <div style={{backgroundColor: 'yellow', width: '75px', height: '75px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: boxFour, top: `${topFour}px`, right: `${rightFour}px`, bottom: `${bottomFour}px`, left: `${leftFour}px`, zIndex: zFour}}>Box 4</div>
                </div>
                <div style={{width: '100%', display: 'flex', marginBottom: '20px'}}>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2>Sticky</h2>
                <p style={{width: '90%'}}> Sticky positioining is a transitions from position relative to position fixed depending on the scroll position. Once the element reaches a specific position on the viewport it becomes 'sticky' and stays in its same position relative to the view port unti it reaches the bottom of its container.</p>
                </div>
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h4>Box 4</h4>
                    <label>Position:</label>
                    <select
                        value={boxFour}
                        onChange={e => setBoxFour(e.target.value)}
                        style={{marginBottom: '10px'}}>
                        <option value='static'>Static</option>
                        <option value='relative'>Relative</option>
                        <option value='fixed'>Fixed</option>
                        <option value='absolute'>Absolute</option>
                        <option value='sticky'>Sticky</option>
                    </select>
                    <div>
                    <label style={{marginRight: '10px'}}>Top:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setTopFour(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Right:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setRightFour(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Bottom:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setBottomFour(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Left:</label>
                    <input
                        placeholder='Type number here'
                        onChange={e => setLeftFour(e.target.value)}/>
                    </div>
                    <div>
                        <label style={{marginRight: '10px'}}>Z-index:</label>
                        <input
                            placeholder='Type number here'
                            onChange={e => setZFour(e.target.value)}/>
                    </div>
                </div>
                </div>               
            </div>
        </div>
    )
}
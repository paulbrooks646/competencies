import React, { useState } from 'react'

export default function Background() {

    const [repeat, setRepeat] = useState()
    const [position, setPosition] = useState()
    const [size, setSize] = useState()
    const [xaxis, setXaxis] = useState()
    const [yaxis, setYaxis] = useState()
    const [xpixel, setXpixel] = useState()
    const [ypixel, setYpixel] = useState()
    const [xsize, setXsize] = useState()
    const [ysize, setYsize] = useState()
    const [sizexpixel, setSizexpixel] = useState()
    const [sizeypixel, setSizeypixel] = useState()
    const [colorone, setColorone] = useState('red')
    const [colortwo, setColortwo] = useState('blue')
    const [colorthree, setColorthree] = useState('green')
    const [percentone, setPercentone] = useState(0)
    const [percenttwo, setPercenttwo] = useState(33)
    const [percentthree, setPercentthree] = useState(66)
    const [direction, setDirection] = useState(0)
    const [endone, setEndone] = useState(20)
    const [endtwo, setEndtwo] = useState(50)
    const [endthree, setEndthree] = useState(80)
    const [radialOne, setRadialOne] = useState('red')
    const [radialTwo, setRadialTwo] = useState('blue')
    const [radialThree, setRadialThree] = useState('green')
    const [radialStartOne, setRadialStartOne] = useState(0)
    const [radialStartTwo, setRadialStartTwo] = useState(33)
    const [radialStartThree, setRadialStartThree] = useState(66)
    const [radialStopOne, setRadialStopOne] = useState(20)
    const [radialStopTwo, setRadialStopTwo] = useState(50)
    const [radialStopThree, setRadialStopThree] = useState(80)
    const [shape, setShape] = useState('ellipse')
    const [radialSize, setRadialSize] = useState('farthest-corner')
    const [radialPosition, setRadialPosition] = useState('center center')

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px', borderBottom: 'solid 1px black' }}>
                <h1>Background</h1>
                <p style={{ width: '80%' }}>In CSS their are more options than a simple color for the background of your elements. We are going to talk about Background Images, Linear Gradients, and Radial Gradients.</p>
            </div>
            <div style={{ display: 'flex', width: '100%', marginBottom: '50px'}}>
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Background Image</h2>
                    <p style={{ width: '80%' }}>The background-image property sets one or more background images for an element. There are properties to help make sure you image appears precisely how you like.</p>
                    <h2>Background Repeat</h2>
                    <p style={{ width: '80%' }}>
                        By default your background image will repeat if it doen't fill its container. If this isn't what you want, you can use the background-repeat property. The values associated with the property are: no-repeat (if you want no repitition), repeat-x (allows the image to only be repeated horizontally), repeat-y (allows the image to only be repeated vertically), space (the background image is repeated as many times as possible without clipping, distributing any whitespace evenly between repititions, and round (the image is repeated and squished or stretched so there will be no whitespace).</p>
                </div>
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2>Background Position</h2>
                    <p style={{ width: '80%' }}> The background-position property sets the starting position of the background image. This can be done with set values (see the dropdown below), units of measurement such as pixels, or a percentage on the containing element. These accept two values the first being width and the second height.</p>
                    <h2>Background Size</h2>
                    <p style={{ width: '80%' }}>The default value for background-size is auto which displays its original size. The length and percentage values both take in two parameters, the first being width and the second being height. They set a speicfic length and width to the image. Cover resize the image to cover the container even if it has to stretch or cut of a little bit of the image. Contain resizes the image to make sure it is fully visible</p>
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', height: '700px', borderBottom: 'solid 1px black', marginBottom: '50px'}}>
                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                    <label>Backgorund Repeat:</label>
                    <select
                        value={repeat}
                        onChange={e => setRepeat(e.target.value)}
                        style={{ marginBottom: "50px" }}>
                        <option value="repeat">Repeat</option>
                        <option value="no-repeat">No Repeat</option>
                        <option value="repeat-x">Repeat X</option>
                        <option value="repeat-y">Repeat Y</option>
                        <option value="space">Space</option>
                        <option value="round">Round</option>
                    </select>
                    <label>Background Position:</label>
                    <select
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        style={{marginBottom: '-10px'}}>
                        <option value='Left Top'>Left Top</option>
                        <option value='Left Center'>Left Center</option>
                        <option value='Left Bottom'>Left Bottom</option>
                        <option value='Right Top'>Right Top</option>
                        <option value='Right Center'>Right Center</option>
                        <option value='Right Bottom'>Right Bottom</option>
                        <option value='Center Top'>Center Top</option>
                        <option value='Center Center'>Center Center</option>
                        <option value='Center Bottom'>Center Bottom</option>
                    </select>
                    <h4 style={{marginBottom: '0px'}}>Or</h4>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px'}}>
                            <label>X-Axis %</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter % here'
                                onChange={e => setXaxis(e.target.value)}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <label>Y-Axis %</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter % here'
                                onChange={e => setYaxis(e.target.value)}/>
                        </div>
                    </div>
                    <button onClick={() => setPosition(`${xaxis}% ${yaxis}%`)}
                    style={{marginBottom: '-10px'}}>Submit</button>
                    <h4 style={{marginBottom: '0px'}}>Or</h4>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px'}}>
                            <label>X-Axis Pixels</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter px here'
                                onChange={e => setXpixel(e.target.value)}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <label>Y-Axis Pixels</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter px here'
                                onChange={e => setYpixel(e.target.value)}/>
                        </div>
                    </div>
                        <button onClick={() => setPosition(`${xpixel}px ${ypixel}px`)}
                        style={{marginBottom: '50px'}}>Submit</button>
                        <label>Background Size:</label>
                    <select
                        value={size}
                        onChange={e => setSize(e.target.value)}
                        style={{marginBottom: '-10px'}}>
                        <option value='Cover'>Cover</option>
                        <option value='Contain'>Contain</option>
                    </select>
                    <h4 style={{marginBottom: '0px'}}>Or</h4>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px'}}>
                            <label>Width Percent</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter % here'
                                onChange={e => setXsize(e.target.value)}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <label>Height Percent</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter % here'
                                onChange={e => setYsize(e.target.value)}/>
                        </div>
                    </div>
                    <button 
                        onClick={() => setSize(`${xsize}% ${ysize}%`)}
                        style={{marginBottom: '-10px'}}>Submit</button>
                    <h4 style={{marginBottom: '0px'}}>Or</h4>
                    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px'}}>
                            <label>X-Axis Pixels</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter px here'
                                onChange={e => setSizexpixel(e.target.value)}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <label>Y-Axis Pixels</label>
                            <input
                                style={{width: '80px'}}
                                placeholder='Enter px here'
                                onChange={e => setSizeypixel(e.target.value)}/>
                        </div>
                    </div>
                        <button onClick={() => setSize(`${sizexpixel}px ${sizeypixel}px`)}>Submit</button>
                </div>
                <div style={{width: '55%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{ backgroundImage: 'url("https://images.theconversation.com/files/220291/original/file-20180524-90281-1qovmkh.jpg?ixlib=rb-1.1.0&rect=0%2C177%2C3567%2C2101&q=45&auto=format&w=496&fit=clip")', width: '100%', height: '50%', backgroundRepeat: repeat, backgroundPosition: position, backgroundSize: size}}>
                </div>
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '50px', borderBottom: 'solid 1px black', width: '100%', height: '850px' }}>
                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{color: ''}}>Linear Gradient</h2>
                    <p style={{width: '90%'}}>A linear gradient is an image consisting of a progressive transition between two or more colors along a straight line. In addition to choosing which colors and how many colors to use, you can specify where you want a color to stop and define a starting point with a direction or angle.</p>
                    <h4>Choose three colors:</h4>
                    <div>
                    <label style={{marginRight: '10px'}}>Color One:</label>
                    <input
                        placeholder='Enter color here'
                        onChange={e => setColorone(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Two:</label>
                    <input
                        placeholder='Enter color here'
                        onChange={e => setColortwo(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Three:</label>
                    <input
                        placeholder='Enter color here'
                        onChange={e => setColorthree(e.target.value)}/>
                    </div>
                    <h4>Give the colors start and stop points:</h4>
                    <div>
                    <label style={{marginRight: '10px'}}>Color One:</label>
                    <input
                        placeholder='Start %'
                        onChange={e => setPercentone(e.target.value)}
                        style={{width: '50px', marginRight: '10px'}}
                        />
                    <input
                        placeholder='Stop %'
                        onChange={e => setEndone(e.target.value)}
                        style={{width: '50px'}}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Two:</label>
                    <input
                        placeholder='Start %'
                        onChange={e => setPercenttwo(e.target.value)}
                        style={{width: '50px', marginRight: '10px'}}
                        />
                    <input
                        placeholder='Stop %'
                        onChange={e => setEndtwo(e.target.value)}
                        style={{width: '50px'}}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Three:</label>
                    <input
                        placeholder='Start %'
                        onChange={e => setPercentthree(e.target.value)}
                        style={{width: '50px', marginRight: '10px'}}/>
                    <input
                        placeholder='Stop %'
                        onChange={e => setEndthree(e.target.value)}
                        style={{width: '50px'}}/>
                    </div>
                    <h4 style={{width: '90%'}}>Choose a direction or angle. When typing an angle remember to type 'deg' after your number.</h4>
                    <label>Direction:</label>
                    <select
                        value={direction}
                        onChange={e => setDirection(e.target.value)}>
                        <option value="To Top Right">To Top Right</option>
                        <option value="To Right">To Right</option>
                        <option value="To Bottom Right">To Bottom Right</option>
                        <option value="To Bottom">To Bottom</option>
                        <option value="To Bottom Left">To Bottom Left</option>
                        <option value="To Left">To Left</option>
                        <option value="To Top Left">To Top Left</option>
                        <option value="To Top">To Top</option>
                    </select>
                    <h4>Or</h4>
                    <div>
                    <label style={{marginRight: '10px'}}>Angle:</label>
                    <input
                        placeholder='Enter angle here'
                        onChange={e => setDirection(e.target.value)}/>
                    </div>
                </div>
                <div style={{width: '60%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ backgroundImage: `linear-gradient(${direction}, ${colorone} ${percentone}% ${endone}%, ${colortwo} ${percenttwo}% ${endtwo}%, ${colorthree} ${percentthree}% ${endthree}%)`, width: '70%', height: '60%', backgroundPosition: 'center' }}>
                </div>
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '50px', borderBottom: 'solid 1px black', width: '100%', height: '950px'}}>
                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{color: ''}}>Radial Gradient</h2>
                    <p style={{width: '90%'}}>A radial gradient is an image consisting of a progressive transition between two or more colors from an origin. It can either be an ellipse or a circle. In addition to choosing which colors and how many colors to use, you can specify where you want a color to start and stop and give it a size and position.</p>
                    <h4>Choose a shape:</h4>
                    <label>Shape:</label>
                    <select
                        value={shape}
                        onChange={e => setShape(e.target.value)}>
                        <option value='ellipse'>Ellipse</option>
                        <option value='circle'>Circle</option>
                    </select>
                    <h4>Choose three colors:</h4>
                    <div>
                    <label style={{marginRight: '10px'}}>Color One:</label>
                    <input
                        placeholder='Enter color here'
                        onChange={e => setRadialOne(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Two:</label>
                    <input
                        placeholder='Enter color here'
                        onChange={e => setRadialTwo(e.target.value)}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Three:</label>
                    <input
                        placeholder='Enter color here'
                        onChange={e => setRadialThree(e.target.value)}/>
                    </div>
                    <h4>Give the colors start and stop points:</h4>
                    <div>
                    <label style={{marginRight: '10px'}}>Color One:</label>
                    <input
                        placeholder='Start %'
                        onChange={e => setRadialStartOne(e.target.value)}
                        style={{width: '50px', marginRight: '10px'}}
                        />
                    <input
                        placeholder='Stop %'
                        onChange={e => setRadialStopOne(e.target.value)}
                        style={{width: '50px'}}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Two:</label>
                    <input
                        placeholder='Start %'
                        onChange={e => setRadialStartTwo(e.target.value)}
                        style={{width: '50px', marginRight: '10px'}}
                        />
                    <input
                        placeholder='Stop %'
                        onChange={e => setRadialStopTwo(e.target.value)}
                        style={{width: '50px'}}/>
                    </div>
                    <div>
                    <label style={{marginRight: '10px'}}>Color Three:</label>
                    <input
                        placeholder='Start %'
                        onChange={e => setRadialStartThree(e.target.value)}
                        style={{width: '50px', marginRight: '10px'}}/>
                    <input
                        placeholder='Stop %'
                        onChange={e => setRadialStopThree(e.target.value)}
                        style={{width: '50px'}}/>
                    </div>
                    <h4 style={{width: '90%'}}>Choose a size:</h4>
                    <label>Size:</label>
                    <select 
                        value={radialSize}
                        onChange={e => setRadialSize(e.target.value)}>
                        <option value='closest-side'>Closest Side</option>
                        <option value='closest-corner'>Closest Corner</option>
                        <option value='farthest-side'>Farthest Side</option>
                        <option value='farthest-corner'>Farthest Corner</option>
                    </select>
                    <h4 style={{width: '90%'}}>Choose a position:</h4>
                    <label>Position</label>
                    <select
                        value={radialPosition}
                        onChange={e => setRadialPosition(e.target.value)}>
                        <option value='Left Top'>Left Top</option>
                        <option value='Left Center'>Left Center</option>
                        <option value='Left Bottom'>Left Bottom</option>
                        <option value='Right Top'>Right Top</option>
                        <option value='Right Center'>Right Center</option>
                        <option value='Right Bottom'>Right Bottom</option>
                        <option value='Center Top'>Center Top</option>
                        <option value='Center Center'>Center Center</option>
                        <option value='Center Bottom'>Center Bottom</option>
                    </select>
                </div>
                <div style={{width: '60%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ backgroundImage: `radial-gradient(${radialSize} ${shape} at ${radialPosition}, ${radialOne} ${radialStartOne}% ${radialStopOne}%, ${radialTwo} ${radialStartTwo}% ${radialStopTwo}%, ${radialThree} ${radialStartThree}% ${radialStopThree}%)`, width: '70%', height: '60%', backgroundPosition: 'center'}}>
                </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from 'react'

export default function Transform() {

    const [scaleX, setScaleX] = useState(1)
    const [scaleY, setScaleY] = useState(1)
    const [skewX, setSkewX] = useState(0)
    const [skewY, setSkewY] = useState(0)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const [translateY, setTranslateY] = useState(0)

    return (
        <div style={{}}>
            <div className='flex' style={{ borderBottom: 'solid', marginBottom: '20px' }}>
                <h1>Transform</h1>
                <p style={{width: '80%'}}>The transform property applies a transformation to an element. It allows you to rotate, scale, translate or skew an element.</p>
            </div>
            <div className='animationDescriptionRow'>
                <div className='fifty'>
                    <h2>Scale</h2>
                    <p>The transform: scale() property resizes the element by multiplying the current size of the element by the assigned value. This can be done on either the x or y axis or both.</p>
                </div>
                <div className='fifty'>
                    <h2>Translate</h2>
                    <p>The transform: translate() property repositions an element. You may move it along either the x or y axis or both. The value can be either a length or a percentage.</p>
                </div>
            </div>
            <div className='animationDescriptionRow' style={{borderBottom: 'solid', marginBottom: '20px'}}>
                <div className='fifty'>
                    <h2>Skew</h2>
                    <p>The transform: skew() property tilts an element. You may tilt it horizontally, vertically or both.</p>
                </div>
                <div className='fifty'>
                    <h2>Rotate</h2>
                    <p>The transform: rotate() property rotates an element clockwise. This can be done along the x axis or the y axis or both.</p>
                </div>
            </div>
            <div className='flex' style={{marginBottom: '80px', marginTop: '80px'}}>
                <div style={{
                    width: '100px', height: '100px', backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scaleX(${scaleX}) scaleY(${scaleY}) skewX(${skewX}deg) skewY(${skewY}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`
                }}>
                    Transform
                </div>
            </div>
            <div className='animationInputField'>
                <div>
                    <label style={{marginRight: '10px'}}>Scale X:</label>
                    <input
                        onChange={e => setScaleX(e.target.value)}
                        placeholder='Enter # here'
                        style={{width: '110px'}}/>
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Scale Y:</label>
                    <input
                        onChange={e => setScaleY(e.target.value)}
                        placeholder='Enter # here'
                        style={{width: '110px'}}/>
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Translate X:</label>
                    <input
                        onChange={e => setTranslateX(e.target.value)}
                        placeholder='Enter # in pixels'
                        style={{width: '110px'}}/>
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Translate Y:</label>
                    <input
                        onChange={e => setTranslateY(e.target.value)}
                        placeholder='Enter # in pixels'
                        style={{width: '110px'}}/>
                </div>
            </div>
            <div className='animationInputField' style={{marginBottom: '50px'}}>
                <div>
                    <label style={{marginRight: '10px'}}>Skew X:</label>
                    <input
                        onChange={e => setSkewX(e.target.value)}
                        placeholder='Enter # in degrees'
                        style={{width: '110px'}}/>
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Skew Y:</label>
                    <input
                        onChange={e => setSkewY(e.target.value)}
                        placeholder='Enter # in degrees'
                        style={{width: '110px'}}/>
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Rotate X:</label>
                    <input
                        onChange={e => setRotateX(e.target.value)}
                        placeholder='Enter # in degrees'
                        style={{width: '110px'}}/>
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Rotate Y:</label>
                    <input
                        onChange={e => setRotateY(e.target.value)}
                        placeholder='Enter # in degrees'
                        style={{width: '110px'}}/>
                </div>
            </div>
        </div>
    )
}
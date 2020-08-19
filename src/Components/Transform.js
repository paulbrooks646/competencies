import React, {useState} from 'react'

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
            <div className='flex' style={{borderBottom: 'solid', marginBottom: '20px'}}>
                <h1>Transform</h1>
                <p>The transform property applies a transformation to an element. It allows you to rotate, scale, translate or skew an element.</p>
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
                <div className='animationDescriptionRow'>
                    <div className='fifty'>
                        <h2>Skew</h2>
                        <p></p>
                    </div>
                    <div className='fifty'>
                        <h2>Font Style</h2>
                        <p>The font-style property specifies the style of a text. The possible values are normal, italic or oblique.</p>
                    </div>
                </div>
            <div className='flex'>
            <div style={{width: '100px', height: '100px', backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `scaleX(${scaleX}) scaleY(${scaleY}) skewX(${skewX}deg) skewY(${skewY}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`
            }}>
                Flying Beavers
            </div>
            </div>
        </div>
    )
}
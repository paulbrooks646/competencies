import React, {useState} from 'react'

export default function Transition() {

    return(
        <div>
            <div className='flex' style={{borderBottom: 'solid'}}>
                <h1>Transition</h1>
                <p style={{width: '80%'}}>The transition property in CSS allows you to change an elemen't smoothly over a given duration.</p>
            </div>
            <div className='animationDescriptionRow'>
                <div className='fifty'>
                    <h2>Transition Delay</h2>
                    <p>The transition-delay property specifies a delay in seconds before a transition begins.</p>
                </div>
                <div className='fifty'>
                    <h2>Transition Duration</h2>
                    <p>The transition-duration  property specifies how many seconds or milliseconds it takes to complete a transition.</p>
                </div>
            </div>
            <div className='animationDescriptionRow' style={{borderBottom: 'solid', marginBottom: '20px'}}>
                <div className='fifty'>
                    <h2>Transition Property</h2>
                    <p>The transition-property specifies which CSS property a transition is for.</p>
                </div>
                <div className='fifty'>
                    <h2>Transition Timing Function</h2>
                    <p>The transition-timing-functionspecifies the speed curve for a transition.</p>
                </div>
            </div>
            <div className='flex'>
                <h1></h1>
            </div>
        </div>
    )
}
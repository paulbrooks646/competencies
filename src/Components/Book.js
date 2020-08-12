import React, {useState} from 'react'

export default function Book() {

return (
    <div>
        <h1>The Book Score</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', transform: 'skewy(-5deg)'}}>
            <div style={{backgroundColor: 'red', height: '200px', width: '120px'}}>
                <h4>Reading</h4>
                <h4>Rating</h4>
                <h4>Referring</h4>
                <h4>Relating</h4>
            </div>
            <div>
            <div style={{backgroundColor: 'red', height: '7px'}}>

            </div>
            <div style={{display: 'flex'}}>
            <div style={{height: '180px', width: '2px', border: 'solid', backgroundColor: 'white'}}>

            </div>
            <div style={{height: '180px', width: '2px', border: 'solid', backgroundColor: 'white'}}>

            </div>
            <div style={{height: '180px', width: '2px', border: 'solid', backgroundColor: 'white'}}>

            </div>
            <div style={{height: '180px', width: '2px', border: 'solid', backgroundColor: 'white'}}>

            </div>
            </div>
            <div style={{backgroundColor: 'red', height: '8px'}}>

            </div>
            </div>
            <div style={{backgroundColor: 'red', height: '200px', width: '5px'}}>

            </div>
        </div>
    </div>
)

}
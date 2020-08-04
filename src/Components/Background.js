import React, { useState } from 'react'

export default function Background() {


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px', borderBottom: 'solid 1px black' }}>
                <h1>Background</h1>
                <p style={{ width: '80%' }}>In CSS their are more options than a simple color for your elements. We are going to talk about Background Images, Linear Gradients, and Radial Gradients.</p>
            </div>
            <div style={{ display: 'flex', width: '100%', marginBottom: '50px', borderBottom: 'solid 1px black' }}>
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
                    <p style={{ width: '80%' }}>The default value for background-size is auto heich displays its original size. The length and percentage values both take in two parameters, the first being width and the second being height. They set a speicfic length and width to the image. Cover resize the image to cover the container even if it has to stretch or cut of a little bit of the image. Contain resizes the image to make sure it is fully visible</p>
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex', height: '500px', borderBottom: 'solid 1px black', marginBottom: '50px'}}>
                <div style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2>Blah blah blah!</h2>
                    <p style={{width: '90%'}}>adslkfj hadlfkjhsda;flkjdsa;flkasdjf;lkajsdf;lasdkj f;alsdkjfas;ldkfjads;lkfj;dlkfj</p>
                </div>
                <div style={{ backgroundImage: 'url("https://images.theconversation.com/files/220291/original/file-20180524-90281-1qovmkh.jpg?ixlib=rb-1.1.0&rect=0%2C177%2C3567%2C2101&q=45&auto=format&w=496&fit=clip")', width: '55%', height: '90%' }}>
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '50px' }}>
                <div style={{ width: '40%' }}>
                    <h2>Linear Gradient</h2>
                    <p></p>
                </div>
                <div style={{ backgroundImage: 'linear-gradient(45deg, red, blue, green)', width: '55%', height: '500px', backgroundPosition: 'top left' }}>

                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '40%' }}>
                    <h2>Radial Gradient</h2>
                    <p></p>
                </div>
                <div style={{ backgroundImage: 'radial-gradient(ellipse, red, blue 20%, green 60%)', width: '55%', height: '500px' }}>
                </div>
            </div>
        </div>
    )
}
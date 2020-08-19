import React, {useState} from 'react'

export default function Font() {


    return (
        <div>
            <div className='flex' style={{borderBottom: 'solid 1px black'}}>
                <h1>Font</h1>
                <p style={{width: '80%'}}>The font attributes affect the text of a given element. These attributes are color, font-style, font-variant, font-weight, font-size, line-height and font-family.</p>
            </div>
            <div>
                <div className='animationDescriptionRow'>
                    <div className='fifty'>
                        <h2>Color</h2>
                        <p>The color property is used to specify an element's text's color. You can use predefined color names, hex codes, rgb, rgba, hsl, and hsla codes to define this properties value.</p>
                    </div>
                    <div className='fifty'>
                        <h2>Font Style</h2>
                        <p>The font-style property specifies the style of a text. The possible values are normal, italic or oblique.</p>
                    </div>
                </div>
                <div className='animationDescriptionRow'>
                    <div className='fifty'>
                        <h2>Font Variant</h2>
                        <p>The font-variant property allows you to turn text to small-caps. In small-caps, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters have a smaller font-size than the original uppercase letters.</p>
                    </div>
                    <div className='fifty'>
                        <h2>Font Weight</h2>
                        <p>The font-weight property sets how thick the characters in a text should be displayed. It accepts the values normal, bold, bolder, lighter or a number between 100 and 900.</p>
                    </div>
                </div>
                <div className='animationDescriptionRow'>
                    <div className='fifty'>
                        <h2>Font Size</h2>
                        <p>The font-size property sets the size of the characters of a text.The values accepted for this property include a variety of preset keywords (which you can see in the dropdown below), fixed lengths defined by units of measurement, or a percentage of the parent elements font-size.</p>
                    </div>
                    <div className='fifty'>
                        <h2>Line Height</h2>
                        <p>The line-height property sets the height of the line containing the specified element's text. This is commonly used to set the distance between lines of text. This property accepts numbers that will be multiplied by the text's font-size, a length specified by a unit of measurement, or a percentage of the current font-size.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='fifty'>
                        <h2>Font Family</h2>
                        <p>The font-family property specifies the font for the text of an element. This can be the name of a font-family or the name of a generic family. You may assign multiple values to this property. A value will only be applied if any preceding values are not supported by the browser. A popular place to find free fonts is <a href='fonts.google.com'>fonts.google.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
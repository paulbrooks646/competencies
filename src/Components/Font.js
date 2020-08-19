import React, {useState} from 'react'

export default function Font() {

    const [color, setColor] = useState()
    const [style, setStyle] = useState()
    const [variant, setVariant] = useState()
    const [weight, setWeight] = useState()
    const [size, setSize] = useState()
    const [height, setHeight] = useState()
    const [family, setFamily] = useState()


    return (
        <div style={{marginBottom: '50px'}}>
            <div className='flex' style={{borderBottom: 'solid'}}>
                <h1>Font</h1>
                <p style={{width: '80%'}}>The font attributes affect the text of a given element. These attributes are color, font-style, font-variant, font-weight, font-size, line-height and font-family.</p>
            </div>
            <div style={{borderBottom: 'solid'}}>
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
                        <p>The font-family property specifies the font for the text of an element. This can be the name of a font-family or the name of a generic family. You may assign multiple values to this property. A value will only be applied if any preceding values are not supported by the browser. A popular place to find free fonts is <a href="fonts.google.com">fonts.google.com</a></p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex'>
                    <h1 style={{
                            color: color,
                            fontStyle: style,
                            fontVariant: variant,
                            fontWeight: weight,
                            fontSize: `${size}px`,
                            lineHeight: height,
                           fontFamily: family,
                           width: '80%' 
                    }}>
                        This Seems Like A Good Place To Do Some Font Practice. Change The Attributes Below And See What Happens To This Little Paragraph. 
                    </h1>
                </div>
                <div className='animationInputField'>
                    <div style={{marginBottom: '20px'}}>
                        <label style={{marginRight: '10px'}}>Color:</label>
                        <input
                            placeholder='Enter color here'
                            onChange={e => setColor(e.target.value)}
                            style={{width: '150px'}}/>
                    </div>
                    <div>
                        <label style={{marginRight: '10px'}}>Font Style:</label>
                        <select
                            onChange={e => setStyle(e.target.value)}>
                            <option value='normal'>Normal</option>
                            <option value='italic'>Italic</option>
                            <option value='oblique'>Oblique</option>
                        </select>
                    </div>
                    <div>
                        <label style={{marginRight: '10px'}}>Font Variant:</label>
                        <select
                            onChange={e => setVariant(e.target.value)}>
                            <option value='normal'>Normal</option>
                            <option value='small-caps'>Small Caps</option>
                        </select>
                    </div>
                    <div>
                        <label  style={{marginRight: '10px'}}>Font Size:</label>
                        <input
                            onChange={e => setSize(e.target.value)}
                            placeholder='Enter # in pixels here'
                            style={{width: '150px'}}/>
                    </div>
                </div>
                <div className='animationInputField' style={{marginBottom: '50px'}}>
                    <div>
                        <label style={{marginRight: '10px'}}>Font Weight:</label>
                        <select
                            onChange={e => setWeight(e.target.value)}>
                                <option value='normal'>Normal</option>
                                <option value='Lighter'>Lighter</option>
                                <option value='Bold'>Bold</option>
                                <option value='bolder'>Bolder</option>
                               <option value='100'>100</option>
                               <option value='200'>200</option>
                               <option value='300'>300</option>
                               <option value='400'>400</option>
                               <option value='500'>500</option>
                               <option value='600'>600</option>
                               <option value='700'>700</option>
                               <option value='800'>800</option>
                               <option value='900'>900</option> 
                            </select>
                    </div>
                    <div>
                      <label style={{marginRight: '10px'}}>Line Height:</label>
                      <input
                        onChange={e => setHeight(e.target.value)}
                        placeholder='Enter # relative to font-size here'
                        style={{width: '200px'}}/>  
                    </div>
                    <div>
                        <label style={{marginRight: '10px'}}
                        >Font Family:</label>
                        <select onChange={e => setFamily(e.target.value)}>
                            <option value='serif'>Serif</option>
                            <option value='sans-serif'>Sans Serif</option>
                            <option value='monospace'>Monospace</option>
                            <option value='cursive'>Cursive</option>
                            <option value='fantasy'>Fantasy</option>
                            <option value='math'>Math</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useState} from 'react'

export default function Pseudo() {

    const [checked, setChecked] = useState(true)



return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: 'solid 1px black'}}>
            <h1>Pseudo Classes</h1>
            <p style={{width: '80%'}}>A pseudo class is a keyword added to a selector to specify a special state of the selected element. One of the most common examples of this is changing an element's attribute when the mouse hovers over it. The syntax for this is adding a colon and the special state after the normal selector: .class:hover. See below for examples of the most popular pseudo-classes.</p>
        </div>
        <div style={{display: 'flex', width: '100%', marginBottom: '0px', borderBottom: 'solid 1px black', alignItems: 'center'}}>
            <div 
                style={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}>
                <h2>Hover</h2>
                <p style={{width: '90%'}}> The :hover pseudo class is used to target an element as the mouse goes over it. With this happens you can give it an attribute or change an existing attribute. Move the mouse over the orange box to the right and see what happens.</p>
            </div>
            <div style={{width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div 
                    className="pseudo"
                    style={{width: '100px', height: '100px', backgroundColor: 'orange'}}>
                </div>
            </div>
        </div>
        <div style={{display: 'flex', width: '100%', borderBottom: 'solid 1px black'}}>
            <div style={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2>Focus</h2>
                <p style={{width: '90%'}}>The :focus pseudo class is used to target an element when it has focus. This can only be used on elements that can have focus. This includes inputs or elements that can accept keyboard events. Look what happens to each of the input boxes to the right when you click into them</p>
            </div>
            <div 
                style={{width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <labeL>Name:</labeL>
                <input 
                    className='border'
                    placeholder='Enter name here'/>
                <label>Favorite Color:</label>
                <input 
                    className='skew'
                    placeholder='Enter favorite color'
                />
                <label>Favorite Song:</label>
                <input 
                    className='rotate'
                    placeholder="Enter favorite song"
                />
                <label>Favorite Book:</label>
                <input 
                    className='translate'
                    placeholder='Enter favorite book'/>
        </div>
        </div>
        <div style={{width: '100%', display: 'flex', borderBottom: 'solid 1px black'}}>
            <div style={{width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h2>Disabled</h2>
                <p style={{width: '90%'}}>The disabled pseudo class targets an element while it is disabled. An element is disabled if it can't be activated or accept focus. The element also has an enabled state when it can be activated or receive focus. Look how clicking on the 'Same as Shipping' checkbox affects the inputs below it.</p>
            </div>
            <div style={{width: '60%', marginBottom: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h4>Shipping Information:</h4>
                <input
                    placeholder='Full Name'/>
                <input
                    placeholder='Address'/>
                <input
                    placeholder='Email'/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h4>Billing Information:</h4>
                <div>
                <label>Same as Shipping?</label>
                <input
                    onChange={() => setChecked(!checked)}
                    type='checkbox'
                    checked={checked}
                    style={{marginBottom: '20px'}}/>
                </div>
                <input
                    type='text' 
                    disabled={checked}
                    placeholder='Full Name'
                    />
                <input
                 type='text' 
                 disabled={checked}
                 placeholder='Address'
                 />
                <input
                 type='text' 
                 disabled={checked}
                 placeholder='Email'/>
                </div>
            </div>
        </div>
        <ul>
            <li>Pig</li>
            <li>Sheep</li>
            <li>Dog</li>
            <li>Weasel</li>
            <li>Bunny</li>
        </ul>
    </div>

)

}
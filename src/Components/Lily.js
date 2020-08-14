import React, { useState } from 'react'

export default function Lily() {
        const [fruit, setFruit] = useState()
        const [creature, setCreature] = useState()
        const [animal, setAnimal] = useState()
        const [candy, setCandy] = useState()
        const [body, setBody] = useState()
        const [color, setColor] = useState()
        const [outside, setOutside] = useState()
        const [song, setSong] = useState()
        const [height, setHeight] = useState()
        const [temple, setTemple] = useState()
        const [name, setName] = useState()

        function submit() {
            let i = 0
            if (fruit === 'watermelon') {
                i++
            }
            if (creature === 'dragon') {
                i++
            }
            if (animal === 'woof') {
                i++
            }
            if (candy === 'eminems') {
                i++
            }
            if (body === 'knee') {
                i++
            }
            if (color === 'white') {
                i++
            }
            if (outside === 'play') {
                i++
            }
            if (song === 'cat') {
                i++
            }
            if (height === 'two') {
                i++
            }
            if (temple === 'more') {
                i++
            }
            alert(`Congratulations ${name}, you scored ${i} out of 10 points possible.`)

        }

    return (
        <div>
            <div>
                <h1>Lily</h1>
            </div>
            <div>
                <h4>Question 1: What is Lily's favorite fruit?</h4>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                        <label>Watermelon</label>
                        <input
                            onClick={e => setFruit(e.target.value)}
                            type='radio'
                            name='fruit'
                            value='watermelon' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{ height: '200px' }}
                            src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                        <label>Pears</label>
                        <input
                            onClick={e => setFruit(e.target.value)}
                            type='radio'
                            name='fruit'
                            value='pear' />
                    </div>
                
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{ height: '200px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                        <label>Mangosteen</label>
                        <input
                            onClick={e => setFruit(e.target.value)}
                            type='radio'
                            name='fruit'
                            value='mangosteen' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{ height: '200px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                        <label>Oranges</label>
                        <input
                            onClick={e => setFruit(e.target.value)}
                            type='radio'
                            name='fruit'
                            value='orange' />
                    </div>
                </div>
                <div>
                    <h4>Question 2: Which of the following magical creatures does Lily look forward to seeing on her walks?</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{ height: '200px' }} src='http://www.heroesofmightandmagic.com/heroes1/creatures/unicorn.gif' />
                            <label>Unicorns</label>
                            <input
                                onClick={e => setCreature(e.target.value)}
                                type='radio'
                                name='creature'
                                value='unicorn' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{ height: '200px' }}
                                src='http://www.heroesofmightandmagic.com/heroes1/creatures/griffin.gif' />
                            <label>Griffins</label>
                            <input
                                onClick={e => setCreature(e.target.value)}
                                type='radio'
                                name='creature'
                                value='griffin' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{ height: '200px' }} src='http://www.heroesofmightandmagic.com/heroes1/creatures/dragon.gif' />
                            <label>Dragons</label>
                            <input
                                onClick={e => setCreature(e.target.value)}
                                type='radio'
                                name='creature'
                                value='dragon' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{ height: '200px' }} src='http://www.heroesofmightandmagic.com/heroes1/creatures/phoenix.gif' />
                            <label>Phoenixes</label>
                            <input
                                onClick={e => setCreature(e.target.value)}
                                type='radio'
                                name='creature'
                                value='phoenix' />
                        </div>
                    </div>
                    <div>
                        <h4>Question 3: Which of the following animals does Lily look forward to seeing on her walks?</h4>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '200px', width: '220px' }}
                                    src='https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg' />
                                <label>Bunnies</label>
                                <input
                                    onClick={e => setAnimal(e.target.value)}
                                    type='radio'
                                    name='animal'
                                    value='hop' />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '200px', width: '220px' }} src='https://www.vmcdn.ca/f/files/via/import/2018/09/20160518_kittens-spca.jpg;w=960' />
                                <label>Kitties</label>
                                <input
                                    onClick={e => setAnimal(e.target.value)}
                                    type='radio'
                                    name='animal'
                                    value='nem' />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '200px', width: '220px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3nwHobafQig-IIPkm5qCehxNZ-ElFMHPf9A&usqp=CAU' />
                                <label>Turtles</label>
                                <input
                                    onClick={e => setAnimal(e.target.value)}
                                    type='radio'
                                    name='animal'
                                    value='turtle' />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnM2Poi7-pft8cprCVhxEAJ_6U7hK6XGHl8w&usqp=CAU' />
                                <label>Doggies</label>
                                <input
                                    onClick={e => setAnimal(e.target.value)}
                                    type='radio'
                                    name='animal'
                                    value='woof' />
                            </div>
                        </div>
                        <div>
                            <h4>Question 4: Lily likes to say the name of which popular candy?</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ height: '200px' }} src='https://marschocolate.com/images/default-source/default-album/42431.png?sfvrsn=0' />
                                    <label>Snickers</label>
                                    <input
                                        onClick={e => setCandy(e.target.value)}
                                        type='radio'
                                        name='candy'
                                        value='snickers' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ height: '200px', width: '220px' }}
                                        src="https://marschocolate.com/images/default-source/M-m's/im-peanut.png?sfvrsn=0" />
                                    <label>M&Ms</label>
                                    <input
                                        onClick={e => setCandy(e.target.value)}
                                        type='radio'
                                        name='candy'
                                        value='eminems' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ height: '200px', width: '220px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ-ossaIPlJ6jrMXPkBEBLMczPM5YliilQBQ&usqp=CAU' />
                                    <label>Twix</label>
                                    <input
                                        onClick={e => setCandy(e.target.value)}
                                        type='radio'
                                        name='candy'
                                        value='twix' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxi2vyErpNOACpa6kW2ZaNUZJb6KbCjAQ6Q&usqp=CAU' />
                                    <label>Skittles</label>
                                    <input
                                        onClick={e => setCandy(e.target.value)}
                                        type='radio'
                                        name='candy'
                                        value='skittles' />
                                </div>
                            </div>
                            <div>
                                <h4>Question 5: Which of the following body parts have we not heard Lily say?</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img style={{ height: '200px', width: '220px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ8od4rzhZS9GzI3-gJom_mkmLPVYn1pZAZw&usqp=CAU' />
                                        <label>Hair</label>
                                        <input
                                            onClick={e => setBody(e.target.value)}
                                            type='radio'
                                            name='body'
                                            value='hair' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img style={{ height: '200px' }}
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3HtuFVY3KE9jzncAj-7XKkZ_t0oa2iKw_Uw&usqp=CAU' />
                                        <label>Ear</label>
                                        <input
                                            onClick={e => setBody(e.target.value)}
                                            type='radio'
                                            name='body'
                                            value='ear' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRX8QpE-ZRhDBsNS-AAEP9bZLXtmK7nFpAbaQ&usqp=CAU' />
                                        <label>Elbow</label>
                                        <input
                                            onClick={e => setBody(e.target.value)}
                                            type='radio'
                                            name='body'
                                            value='elbow' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlwAoKNVSdNc8ZEjtdeJLqP-V17_DCtOqMUw&usqp=CAU' />
                                        <label>Knee</label>
                                        <input
                                            onClick={e => setBody(e.target.value)}
                                            type='radio'
                                            name='body'
                                            value='knee' />
                                    </div>
                                </div>
                                <div>
                                    <h4>Question 6: Which of the following colors have we not heard Lily say?</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ height: '200px', width: '220px', borderRadius: '50%', backgroundColor: 'orange', border: 'solid' }}>
                                            </div>
                                            <label>Orange</label>
                                            <input
                                                onClick={e => setColor(e.target.value)}
                                                type='radio'
                                                name='color'
                                                value='orange' />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ height: '200px', width: '220px', borderRadius: '50%', backgroundColor: 'white', border: 'solid' }}></div>
                                            <label>White</label>
                                            <input
                                                onClick={e => setColor(e.target.value)}
                                                type='radio'
                                                name='color'
                                                value='white' />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ height: '200px', width: '220px', borderRadius: '50%', backgroundColor: 'purple', border: 'solid' }}></div>
                                            <label>Purple</label>
                                            <input
                                                onClick={e => setColor(e.target.value)}
                                                type='radio'
                                                name='color'
                                                value='purple' />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{ height: '200px', width: '220px', borderRadius: '50%', backgroundColor: 'red', border: 'solid' }}></div>
                                            <label>Red</label>
                                            <input
                                                onClick={e => setColor(e.target.value)}
                                                type='radio'
                                                name='color'
                                                value='red' />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Question 7: What word does Lily most commonly say when she wants to go outside?</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <h3 style={{ height: '200px', width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' }}>Play!</h3>
                                                <label>Play</label>
                                                <input
                                                    onClick={e => setOutside(e.target.value)}
                                                    type='radio'
                                                    name='outside'
                                                    value='play' />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <h3 style={{ height: '200px', width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' }}>Out!</h3>
                                                <label>Out</label>
                                                <input
                                                    onClick={e => setOutside(e.target.value)}
                                                    type='radio'
                                                    name='outside'
                                                    value='out' />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <h3 style={{ height: '200px', width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' }}>Water!</h3>
                                                <label>Water</label>
                                                <input
                                                    onClick={e => setOutside(e.target.value)}
                                                    type='radio'
                                                    name='outside'
                                                    value='water' />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <h3 style={{ height: '200px', width: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px' }}>Slide!</h3>
                                                <label>Slide</label>
                                                <input
                                                    onClick={e => setOutside(e.target.value)}
                                                    type='radio'
                                                    name='outside'
                                                    value='slide' />
                                            </div>
                                        </div>
                                        <div>
                                            <h4>Question 8: Which animals has Lily not had her daddy sing to her about?</h4>
                                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img style={{ height: '200px', border: 'solid 5px chartreuse' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL2xrKtmGD5iLIhvBjxGVuQitvKboBGGK5jQ&usqp=CAU' />
                                                    <label>Chartreuse Beavers</label>
                                                    <input
                                                        onClick={e => setSong(e.target.value)}
                                                        type='radio'
                                                        name='song'
                                                        value='beaver' />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img style={{ height: '200px', width: '220px', border: 'solid 5px purple' }}
                                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzembit7hYwPacYqRN73tv1U5vliwtEZwaHA&usqp=CAU' />
                                                    <label>Purple Dogs</label>
                                                    <input
                                                        onClick={e => setSong(e.target.value)}
                                                        type='radio'
                                                        name='song'
                                                        value='dog' />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img style={{ width: '220px', height: '200px', border: 'solid 5px red' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9_NFT4tYjvk67RpBHNZ2EyvF9pIPGrZkePw&usqp=CAU' />
                                                    <label>Red Ducks</label>
                                                    <input
                                                        onClick={e => setSong(e.target.value)}
                                                        type='radio'
                                                        name='song'
                                                        value='duck' />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img style={{ width: '220px', height: '200px', border: 'solid 5px green' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe4PjCDkbadq4PKdBh4sKYY0QwUSiuJtickQ&usqp=CAU' />
                                                    <label>Green Kitties</label>
                                                    <input
                                                        onClick={e => setSong(e.target.value)}
                                                        type='radio'
                                                        name='song'
                                                        value='cat' />
                                                </div>
                                            </div>
                                            <div>
                                                <h4>Question 9: If Lily is 38", how many inches does she need to grow to be tall enough to go on Splash Mountain?</h4>
                                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIGUVYW394PHaA-nJxearIwow1CFetnat_RQ&usqp=CAU' />
                                                        <label>12</label>
                                                        <input
                                                        onClick={e => setHeight(e.target.value)}
                                                            type='radio'
                                                            name='height'
                                                            value='twelve' />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img style={{ height: '200px' }}
                                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWcflPeekWmrqBFqtv3Xhcnrn1HXSCQg7RdQ&usqp=CAU' />
                                                        <label>2</label>
                                                        <input
                                                            onClick={e => setHeight(e.target.value)}
                                                            type='radio'
                                                            name='height'
                                                            value='two' />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvAyxGCEFwzpuOy1ONmXwfvzD0k1yS28nGww&usqp=CAU' />
                                                        <label>6</label>
                                                        <input
                                                            onClick={e => setHeight(e.target.value)}
                                                            type='radio'
                                                            name='height'
                                                            value='six' />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB4Um1Cs7W-EMnNbXOLgDw0fBqIu-znwDebA&usqp=CAU' />
                                                        <label>8</label>
                                                        <input
                                                            onClick={e => setHeight(e.target.value)}
                                                            type='radio'
                                                            name='height'
                                                            value='eight' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4>Question 10: What does Lily commonly repeat when we drive by the temple?</h4>
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                            <h3 style={{height: '200px', width: '220px', fontSize:'50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >Stop!</h3>
                                                            <label>Stop</label>
                                                            <input
                                                                onClick={e => setTemple(e.target.value)}
                                                                type='radio'
                                                                name='temple'
                                                                value='stop' />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <h3 style={{height: '200px', width: '220px', fontSize:'50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >White!</h3>
                                                            <label>White</label>
                                                            <input
                                                                onClick={e => setTemple(e.target.value)}
                                                                type='radio'
                                                                name='temple'
                                                                value='white' />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <h3 style={{height: '200px', width: '220px', fontSize:'50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >More!</h3>
                                                            <label>More</label>
                                                            <input
                                                                onClick={e => setTemple(e.target.value)}
                                                                type='radio'
                                                                name='temple'
                                                                value='more' />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <h3 style={{height: '200px', width: '220px', fontSize:'50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >Ooooh!</h3>
                                                            <label>Ooooh</label>
                                                            <input
                                                                onClick={e => setTemple(e.target.value)}
                                                                type='radio'
                                                                name='temple'
                                                                value='ooooh' />
                                                        </div>
                                                    </div>
                                                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', marginTop: '50px', alignItems: 'center'}}>
                                                        <div>
                                                            <label style={{marginRight: '20px', fontSize: '50px'}}>Name:</label>
                                                            <input
                                                                style={{height: '30px', width: '250px', position: 'relative', top: '-8px'}}
                                                                onChange={e => setName(e.target.value)}
                                                                placeholder='Enter name here'/>
                                                        </div>
                                                    <div>
                                                        <button
                                                            onClick={() => submit()}
                                                            style={{width: '100px', height: '30px', color: 'blue', border: 'solid 3px blue', backgroundColor: 'yellow', borderRadius: '25%'}}
                                                        >Submit</button>
                                                    </div>
                                                    </div>
                                                     </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
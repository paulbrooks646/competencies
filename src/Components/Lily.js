import React, { useState } from 'react'

export default function Lily() {



    return (
        <div>
            <div>
                <h1>Lily</h1>
            </div>
            <div>
                <h4>Question 1: What is Lily's favorite fruit?</h4>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{height: '200px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                        <label>Watermelon</label>
                        <input
                            type='radio'
                            name='fruit'
                            value='watermelon' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{ height: '200px' }}
                            src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                        <label>Pears</label>
                        <input
                            type='radio'
                            name='fruit'
                            value='pear' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{ height: '200px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                        <label>Mangosteen</label>
                        <input
                            type='radio'
                            name='fruit'
                            value='mangosteen' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img style={{ height: '200px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                        <label>Oranges</label>
                        <input
                            type='radio'
                            name='fruit'
                            value='orange' />
                    </div>
                </div>
                <div>
                    <h4>Question 2: Which of the following magical creatures does Lily look forward to seeing on her walks?</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{height: '200px'}} src='http://www.heroesofmightandmagic.com/heroes1/creatures/unicorn.gif' />
                            <label>Unicorns</label>
                            <input
                                type='radio'
                                name='creature'
                                value='unicorn' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img style={{height: '200px'}}
                                src='http://www.heroesofmightandmagic.com/heroes1/creatures/griffin.gif' />
                            <label>Griffins</label>
                            <input
                                type='radio'
                                name='creature'
                                value='griffin' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{ height: '200px' }} src='http://www.heroesofmightandmagic.com/heroes1/creatures/dragon.gif' />
                            <label>Dragons</label>
                            <input
                                type='radio'
                                name='creature'
                                value='dragon' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{ height: '200px' }} src='http://www.heroesofmightandmagic.com/heroes1/creatures/phoenix.gif' />
                            <label>Phoenixes</label>
                            <input
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
                                    src='https://www.protexinvet.com/userfiles/image/cute-2500929_1920_(1).jpg'/>
                                <label>Bunnies</label>
                                <input
                                    type='radio'
                                    name='animal'
                                    value='hop' />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '200px', width: '220px' }} src='https://www.vmcdn.ca/f/files/via/import/2018/09/20160518_kittens-spca.jpg;w=960' />
                                <label>Kitties</label>
                                <input
                                    type='radio'
                                    name='animal'
                                    value='nem' />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{ height: '200px', width: '220px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3nwHobafQig-IIPkm5qCehxNZ-ElFMHPf9A&usqp=CAU' />
                                <label>Turtles</label>
                                <input
                                    type='radio'
                                    name='animal'
                                    value='turtle' />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img style={{height: '200px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnM2Poi7-pft8cprCVhxEAJ_6U7hK6XGHl8w&usqp=CAU' />
                                <label>Doggies</label>
                                <input
                                    type='radio'
                                    name='animal'
                                    value='woof' />
                            </div>
                        </div>
                        <div>
                            <h4>Question 4: Lily likes to say the name of which popular candy?</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{height: '200px'}} src='https://marschocolate.com/images/default-source/default-album/42431.png?sfvrsn=0' />
                                    <label>Snickers</label>
                                    <input
                                        type='radio'
                                        name='candy'
                                        value='snickers' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ height: '200px', width: '220px'}}
                                        src="https://marschocolate.com/images/default-source/M-m's/im-peanut.png?sfvrsn=0" />
                                    <label>M&Ms</label>
                                    <input
                                        type='radio'
                                        name='candy'
                                        value='eminems' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ height: '200px', width: '220px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ-ossaIPlJ6jrMXPkBEBLMczPM5YliilQBQ&usqp=CAU' />
                                    <label>Twix</label>
                                    <input
                                        type='radio'
                                        name='candy'
                                        value='twix' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ height: '200px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJxi2vyErpNOACpa6kW2ZaNUZJb6KbCjAQ6Q&usqp=CAU' />
                                    <label>Skittles</label>
                                    <input
                                        type='radio'
                                        name='candy'
                                        value='skittles' />
                                </div>
                            </div>


                            <div>
                                <h4>Question 5: What is Lily's favorite fruit?</h4>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                                        <label>Watermelon</label>
                                        <input
                                            type='radio'
                                            name='fruit'
                                            value='watermelon' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img style={{ width: '215px' }}
                                            src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                                        <label>Pears</label>
                                        <input
                                            type='radio'
                                            name='fruit'
                                            value='pear' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img style={{ width: '215px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                                        <label>Mangosteen</label>
                                        <input
                                            type='radio'
                                            name='fruit'
                                            value='mangosteen' />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img style={{ width: '225px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                                        <label>Oranges</label>
                                        <input
                                            type='radio'
                                            name='fruit'
                                            value='orange' />
                                    </div>
                                </div>
                                <div>
                                    <h4>Question 1: What is Lily's favorite fruit?</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                                            <label>Watermelon</label>
                                            <input
                                                type='radio'
                                                name='fruit'
                                                value='watermelon' />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <img style={{ width: '215px' }}
                                                src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                                            <label>Pears</label>
                                            <input
                                                type='radio'
                                                name='fruit'
                                                value='pear' />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <img style={{ width: '215px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                                            <label>Mangosteen</label>
                                            <input
                                                type='radio'
                                                name='fruit'
                                                value='mangosteen' />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <img style={{ width: '225px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                                            <label>Oranges</label>
                                            <input
                                                type='radio'
                                                name='fruit'
                                                value='orange' />
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Question 1: What is Lily's favorite fruit?</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                                                <label>Watermelon</label>
                                                <input
                                                    type='radio'
                                                    name='fruit'
                                                    value='watermelon' />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <img style={{ width: '215px' }}
                                                    src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                                                <label>Pears</label>
                                                <input
                                                    type='radio'
                                                    name='fruit'
                                                    value='pear' />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <img style={{ width: '215px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                                                <label>Mangosteen</label>
                                                <input
                                                    type='radio'
                                                    name='fruit'
                                                    value='mangosteen' />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <img style={{ width: '225px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                                                <label>Oranges</label>
                                                <input
                                                    type='radio'
                                                    name='fruit'
                                                    value='orange' />
                                            </div>
                                        </div>
                                        <div>
                                            <h4>Question 1: What is Lily's favorite fruit?</h4>
                                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                                                    <label>Watermelon</label>
                                                    <input
                                                        type='radio'
                                                        name='fruit'
                                                        value='watermelon' />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img style={{ width: '215px' }}
                                                        src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                                                    <label>Pears</label>
                                                    <input
                                                        type='radio'
                                                        name='fruit'
                                                        value='pear' />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img style={{ width: '215px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                                                    <label>Mangosteen</label>
                                                    <input
                                                        type='radio'
                                                        name='fruit'
                                                        value='mangosteen' />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <img style={{ width: '225px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                                                    <label>Oranges</label>
                                                    <input
                                                        type='radio'
                                                        name='fruit'
                                                        value='orange' />
                                                </div>
                                            </div>
                                            <div>
                                                <h4>Question 1: What is Lily's favorite fruit?</h4>
                                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                                                        <label>Watermelon</label>
                                                        <input
                                                            type='radio'
                                                            name='fruit'
                                                            value='watermelon' />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img style={{ width: '215px' }}
                                                            src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                                                        <label>Pears</label>
                                                        <input
                                                            type='radio'
                                                            name='fruit'
                                                            value='pear' />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img style={{ width: '215px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                                                        <label>Mangosteen</label>
                                                        <input
                                                            type='radio'
                                                            name='fruit'
                                                            value='mangosteen' />
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <img style={{ width: '225px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                                                        <label>Oranges</label>
                                                        <input
                                                            type='radio'
                                                            name='fruit'
                                                            value='orange' />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4>Question 1: What is Lily's favorite fruit?</h4>
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                                                            <label>Watermelon</label>
                                                            <input
                                                                type='radio'
                                                                name='fruit'
                                                                value='watermelon' />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                            <img style={{ width: '215px' }}
                                                                src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                                                            <label>Pears</label>
                                                            <input
                                                                type='radio'
                                                                name='fruit'
                                                                value='pear' />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                            <img style={{ width: '215px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                                                            <label>Mangosteen</label>
                                                            <input
                                                                type='radio'
                                                                name='fruit'
                                                                value='mangosteen' />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                            <img style={{ width: '225px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                                                            <label>Oranges</label>
                                                            <input
                                                                type='radio'
                                                                name='fruit'
                                                                value='orange' />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Question 1: What is Lily's favorite fruit?</h4>
                                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4wieTIWGKusAGpkLmO7LHIfeqzhZOpF_Ecg&usqp=CAU' />
                                                                <label>Watermelon</label>
                                                                <input
                                                                    type='radio'
                                                                    name='fruit'
                                                                    value='watermelon' />
                                                            </div>
                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <img style={{ width: '215px' }}
                                                                    src='https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/pears_commodity-page.png' />
                                                                <label>Pears</label>
                                                                <input
                                                                    type='radio'
                                                                    name='fruit'
                                                                    value='pear' />
                                                            </div>
                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <img style={{ width: '215px' }} src='https://images-na.ssl-images-amazon.com/images/I/41nDqKsRGHL._SX425_.jpg' />
                                                                <label>Mangosteen</label>
                                                                <input
                                                                    type='radio'
                                                                    name='fruit'
                                                                    value='mangosteen' />
                                                            </div>
                                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                                <img style={{ width: '225px' }} src='https://www.marlerblog.com/files/2013/03/orange.jpg' />
                                                                <label>Oranges</label>
                                                                <input
                                                                    type='radio'
                                                                    name='fruit'
                                                                    value='orange' />
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
        </div>

    )
}
import React, {useState} from 'react'

export default function Heroes() {

return (
    <div>
        {/* <div>
            <h1>
                Heroes of Might and Magic
            </h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2>Knight Castle</h2>
                <img src="http://www.heroesofmightandmagic.com/heroes1/castles/knight.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/peasant.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/archer.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/pikeman.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/swordsman.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/cavalry.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/paladin.gif"/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2>Barbarian Castle</h2>
                <img src="http://www.heroesofmightandmagic.com/heroes1/castles/barbarian.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/goblin.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/orc.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/wolf.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/ogre.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/troll.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/cyclops.gif"/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2>Sorceress Castle</h2>
                <img src="http://www.heroesofmightandmagic.com/heroes1/castles/sorceress.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/sprite.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/dwarf.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/elf.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/druid.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/unicorn.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/phoenix.gif"/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2>Warlock Castle</h2>
                <img src="http://www.heroesofmightandmagic.com/heroes1/castles/warlock.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/centaur.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/gargoyle.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/griffin.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/minotaur.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/hydra.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/dragon.gif"/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src=""/>
                <h2>Additional Creatures</h2>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/rogue.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/nomad.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/ghost.gif"/>
                <img src="http://www.heroesofmightandmagic.com/heroes1/creatures/genie.gif"/>
            </div>
        </div> */}
        <div style={{marginTop: '200px'}}>
            <img className='wolf' src='http://www.heroesofmightandmagic.com/heroes1/creatures/phoenix.gif'/>
            <div className='melvin'>
                <img src='http://www.heroesofmightandmagic.com/heroes1/creatures/ghost.gif'/>
            </div>
        </div>
    </div>
)
}
import React from 'react'
import frischs from '../pictures/frischs.jpeg'
// import goetta from '../pictures/goetta.png'
// import grippos from '../pictures/grippos.jpeg'
// import larosas from '../pictures/larosas.png'
// import montinn from '../pictures/montgomeryinn.avif'
import skyline from '../pictures/skyline.jpeg'
import bigash from '../pictures/bigash.jpeg'
import taps from '../pictures/taps.jpeg'
import '../index.css'

const FoodDrink = () => {
    return (
        <div>
            <h2 className='center'>Food</h2>
            <div className='flex'>
                <img src={skyline} alt="skyline" />
                <img src={frischs} alt="frischs" className='sm-img'/>
            </div>
            <br />
            <div className="center">
                <p>Cincinnati offers some of the most unique, regionally-exclusive foods in the nation! Try the Cincinnati-style chili at Skyline or the fall off the bone barbeque ribs from Montgomery Inn! Cincinnati is also home to the popular fast-food chain, Frisch's. Nothing quite compares to a fresh Big Boy sandwich!</p>
            </div>
            <br />
            <div className='center'>
                <h2>Drink</h2>
                <div className='flex'>
                    <img src={bigash} alt="bigash" className='sm-img' />
                    <img src={taps} alt="taps" className='sm-img' />
                </div>
                <br />
                <div className="center">
                    <p>There sure is no shortage of breweries and bars in Cincinnati! Award-winning Cincinnati brewery, Rhinegeist, offers an IPA called Truth, and it's sure to win over any IPA fan. 50West brewing includes a full bar, a burger shack with regionally themed burgers, and various games and entertainment including sand volleyball. Feel free to bring your kids or furry friends!</p>
                </div>
            </div>
        </div>
    )
}




export default FoodDrink;
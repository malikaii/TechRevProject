import React from 'react'
import './AlbumCards.css';


function AlbumCards() {
    return (
        <div className='title-container'>
            <h1>J. Cole</h1>
            <p>Albums: </p>

            <div className='album-container'>
                <img height="200" width="300" src="/JCOLE/ColeWorld.JPEG" alt="SideLine Story"/>
                <img height="200" width="300" src="/JCOLE/BS.jpg" alt="Born Sinner"/>
                <img height="200" width="300" src="/JCOLE/2014ForestHillsDrive.jpg" alt="2014 Forest Hills Drive"/>

            </div>
            <br></br>
            <div className='album-two-container'>
                <img height="200" width="230" src="/JCOLE/4YEO.jpg" alt="4 Your Eyez Only"/>
                <img height="200" width="230" src="/JCOLE/KOD.jpg" alt="KOD"/>
                <img height="200" width="230" src="/JCOLE/TheOffSeason.jpg" alt="The Off Season"/>
            </div>
        </div>
    )
}



export default AlbumCards;

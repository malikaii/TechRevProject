import React from 'react'
import { Link } from 'react-router-dom';
import '../Pages/AW.css';

function AW() {
    return (
        <div className='title-container'>
            <h1>Amy Winehouse</h1>
            <p>Albums: </p>

            <div className='album-container'>
                <Link to="/INFO">
                    <img height="200" width="230" src="Back2Black.png" alt="Back To Black"/>
                </Link>
                
            </div>
            <div>
                <br></br>
            </div>
            <div>
                <Link to="/Frank">
                    <img height="200" width="230" padding-right="3em" src="Frank.png" alt="Back To Black"/>
                </Link>
            </div>
        </div>
    )
}

export default AW

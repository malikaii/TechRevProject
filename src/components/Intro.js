import React from 'react'
import { Button, Button2 } from './Button'
import './Intro.css'
import { Link } from 'react-router-dom';

function Intro() {
    return (
        <div className='intro-container'>
            <h1>DISCOVER DISCOGRAPHY</h1>
            <p>Reviews coming soon:</p>
            <ul>
                <li>
                    <Link to="/JCOLE" >
                        J. Cole
                    </Link>
                </li>
                <li>
                    <Link to="/AmyWinehouse">
                        Amy Winehouse
                    </Link>
                </li>
            </ul>
            <div className='intro-btns'>
                <Button2
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    WRITE A REVIEW
                </Button2>
            </div>
        </div>
    )
}

export default Intro

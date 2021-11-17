import React from 'react'
import './INFO1.css'





function INFO1() {
    return (
        <div className="amy-container">
            <div className="amy">
                <h1><i>Back To Black</i></h1>
                <img height="230" width="230" src="Back2Black.png" alt="Back To Black"/>
                <h1>My rating: 8/10</h1>
                <p>Album Highlight: Tears dry on their own</p>
                <p id='working'></p>
            </div>
            <div className="rating">
                <form>
                    <div class="form-group">
                        <label for="input">Add comment:</label>
                        <input type="text" className="form-control" id="input" placeholder="Share your thoughts"/>
                        
                    </div>
                    
                    <button onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('working').innerHTML = document.getElementById('input').value;
                    }} type="enter" className="btn btn-primary">Enter</button>
                </form>   
            </div>
        </div>
    )
}




export default INFO1

import React from 'react'
import "./Profile.css"

function Profile() {
    return (
        <div className="profile-container">
            <i class="fas fa-user" ></i>
            <h1>Malick Ouedraogo</h1> 
            <p>User Since: 10/26/21</p>
            <h1>--Details--</h1>
            <p>
                Student @ University of Louisiana Lafayette
                <br/>
                Major: Computer Science
                <br/>

            </p>
            <div className="bio-container">
                <p>
                    <i>-Discover Discography is a prototype<br/>
                    web application that serves as a blog<br/>
                    for me to use and upload personal<br/>
                    reviews of albums I listen to.-
                    </i>
                </p>
            </div>
        </div>
    )
}

export default Profile

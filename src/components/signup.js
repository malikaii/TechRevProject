import React from 'react'
import "./signup.css";
import { Link } from 'react-router-dom';


function signup() {
    return (
        <div className="signup-container">
            <form>
                <div>
                </div>     
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    return(
                        <Link to="/Frank"/>
                    )

                }}type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default signup

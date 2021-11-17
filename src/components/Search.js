import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

function Search() {
    return (
        <div className="search-container">
            <form>
                <div class="form-group">
                    <label for="exampleInputPassword1">Search a name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Search"/>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    if(document.getElementById('exampleInputPassword1').value == "Amy Winehouse"){
                        console.log("HEy");
                        return(
                            <a href="/AmyWinehouse"></a>
                        )
                    }

                }}
                type="submit" class="btn btn-primary">Submit</button>
            </form>        
        </div>
    )
}

export default Search;

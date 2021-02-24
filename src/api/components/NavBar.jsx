import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {

    
    render() {
        
        return (
            <div className='fixed-top'>
                    <nav className="navbar navbar-expand-lg navbar-ligth bg-primary">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand text-warning titreApp" to='/'>ALLOMOVIES</NavLink>
                           <div>
                           <NavLink exact to='/'><button className="btn btn-warning rounded-end">Home</button></NavLink>
                            <NavLink to='/Favoris'><button className="btn btn-danger rounded-start m-1" >Favoris</button></NavLink>
                           </div>
                        </div>
                    </nav>
            </div>
        )
    }
}

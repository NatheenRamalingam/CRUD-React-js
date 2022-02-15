import React from 'react';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-info'>
            <div className="container">
                <Link to={`/`} className='navbar-brand'>CRUD</Link>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='menu'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to={`/home`} className='nav-link'>Home</Link>

                    </li>
                    <li className='nav-item'>
                        <Link to={`/create`} className='nav-link'>Create</Link>

                    </li>
                    <li className='nav-item'>
                        <Link to={`/update/:id`} className='nav-link'>Update</Link>

                    </li>


                </ul>

            </div>

            </div>
           

        </nav>
    )
}

export default Menu;

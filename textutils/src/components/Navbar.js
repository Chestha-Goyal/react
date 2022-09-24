import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        // javascript me likhge code
        // then backticks ` lgyuge taki ham puri string ke andr template literal ka use kr sku
        // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}> 
        // ye error dega isme yeah show hoga ki setmode use nhi huya assign to huya tha
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                {/*  link auto--link and to use krne se page reload nhi hoga */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        // agar koi bhi tag close nhi ho rha hoga to error dega to fr bho '/' is se bnd krna pdga

                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form> */}
                    {/* ternonary operator
                    javascript bnya backtick lgyi */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  
                    {/* divide and conqure
                    template leteral then puri string bn gyi jo backtrick ke andr hai
                    jab ham backtrik use krte hai to $ lga kr koi bhi variable use kr skte hai(${props.mode==='light'?'dark':'light'})
                    variable ka andr ternoray operator ik agar dark hai to light and light hai to dark */}
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
 
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
};
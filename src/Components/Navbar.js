import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import './Navbar.css';
export class Navbar extends Component {
    render() {
        return (
            <div className='container-fluid nav_bg sticky-top'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/" >NewsGo</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink activeclassName='active' className="nav-link"  aria-current="page" to="/">Home</NavLink>
                                </li>
                                {/* <li className="nav-item"><Link className="nav-link" to="#">About</Link></li> */}
                                <li className="nav-item"><NavLink activeclassName='active' className="nav-link"  to="/general">General</NavLink></li>
                                <li className="nav-item"><NavLink activeclassName='active' className="nav-link"  to="/business">Business</NavLink></li>
                                <li className="nav-item"><NavLink activeclassName='active' className="nav-link"  to="/entertainment">Entertainment</NavLink></li>
                                <li className="nav-item"><NavLink activeclassName='active' className="nav-link"  to="/health">Health</NavLink></li>
                                <li className="nav-item"><NavLink activeclassName='active' className="nav-link"  to="/science">Science</NavLink></li>
                                <li className="nav-item"><NavLink activeclassName='active' className="nav-link"  to="/sports">Sports</NavLink></li>
                                <li className="nav-item"><NavLink activeclassName='active' className="nav-link"  to="/technology">Technology</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
                </div>
            </div>
        )
    }
}

export default Navbar
import React from 'react';
import logo from '../../logo.svg';
import Reach from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return(
            <nav>
                <div>
                    <img src={logo} alt="logo" height={80} />
                </div>
                <div>
                    <ul>
                        <a href="#home"><li>Home</li></a>
                        <a href="#about"><li>About</li></a>
                        <a href="#contact"><li>Contact</li></a>
                        <a href="#work"><li>Work</li></a>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
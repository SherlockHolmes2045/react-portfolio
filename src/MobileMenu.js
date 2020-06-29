import React, {
    Component
} from 'react';

class MobileMenu extends Component {

    render(){
        return(
            <div className="container">
                <div className="mobile-menu__close">
                    <span><i className="mdi mdi-close" aria-hidden="true"></i></span>
                </div>
                <nav className="mobile-menu__wrapper">
                    <ul>
                        <li><a href="#hello">Hello</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default MobileMenu;
import React, {
    Component
} from 'react';

class Header extends Component {
    render(){
        return(
        <div className="container">
            <div className="row personal-profile">
                <div className="col-md-4 personal-profile__avatar">
                    <img className="" src="assets/img/img_avatar.png" alt="avatar"/>
                </div>
                <div className="col-md-8">
                    <p className="personal-profile__name">Ivan Lemovou</p>
                    <p className="personal-profile__work">fullstack developer, IT-engineer</p>
                    <div className="personal-profile__contacts">
                        <dl className="contact-list contact-list__opacity-titles">
                            <dt>Age:</dt>
                            <dd>17</dd>
                            <dt>Phone:</dt>
                            <dd><a href="tel:237655480901">+237655480901</a></dd>
                            <dt>Email:</dt>
                            <dd><a href="mailto:lemovou@gmail.com">lemovou@gmail.com</a></dd>
                            <dt>Address:</dt>
                            <dd>Douala,Logpom</dd>
                        </dl>
                    </div>
                    <p className="personal-profile__social">
                        <a href="https://github.com/SherlockHolmes2045" target="_blank"><i className="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/ivan-lemovou-98a585171/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                        <a href="https://www.facebook.com/ivan.lemovou" target="_blank"><i className="fa fa-facebook-square"></i></a>
                    </p>
                </div>
            </div>Name
        </div>
        )
    }
}

export default Header;
import React, {
    Component
  } from 'react';

  class Contact extends Component{

    render(){
        const background = "assets/img/img_bg_main.jpg";
        return(
            <div className="background" style={{backgroundImage: `url(${background})`}}>
    <div id="contact" className="container section">
      <div className="row">
        <div className="col-md-12">
          <p id="contacts_header" className="section__title">Get in touch_</p>
        </div>
      </div>
      <div className="row contacts">
        <div className="col-md-5 col-lg-4">
          <div className="contacts__list">
            <dl className="contact-list">
              <dt>Phone:</dt>
              <dd><a href="tel:237655480904">{this.props.tel}</a></dd>
              <dt>Email:</dt>
              <dd><a href="mailto:lemovou@gmail.com">{this.props.email}</a></dd>
            </dl>
          </div>
          <div className="contacts__social">
            <ul>
              <li><a href={this.props.facebook}>Facebook</a></li>
              <li><a href={this.props.linkedin}>Linkedin</a></li>
              <li><a href={this.props.github}>GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-7 col-lg-5">
          <div className="contacts__form">
            <p className="contacts__form-title">Or just write me a letter here_</p>
            <form className="js-form">
              <div className="form-group">
                <input className="form-field js-field-name" type="text" placeholder="Your name" required/>
                <span className="form-validation"></span>
                <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div className="form-group">
                <input className="form-field js-field-email" type="email"  placeholder="Your e-mail" required/>
                <span className="form-validation"></span>
                <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <div className="form-group">
                <textarea className="form-field js-field-message" placeholder="Type the message here" required></textarea>
                <span className="form-validation"></span>
                <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
              </div>
              <button className="site-btn site-btn--form" type="submit" value="Send">Send</button>
            </form>
          </div>
          <div className="footer">
            <p>{this.props.copyrigthName}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
        )
    }
  }

  export default Contact;
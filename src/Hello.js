import React, {
    Component
} from 'react';

class Hello extends Component {
    render(){
        return(
        <section id="hello" className="container section">
            <div className="row">
                <div className="col-md-10">
                    <h2 id="hello_header" className="section__title">Hi_</h2>
                    <p className="section__description">
                        I am Junior fullstack developer able to build web,mobile and desktop apps. Skilled at writing well-designed, testable and efficient code using
                        current best practices in development. Fast learner, hard worker and team player who is proficient in
                        coding and analazing.
          </p>
        <a href="assets/img/CV Ivan Lemovou Dachi.pdf" className="section_btn site-btn"><img src="assets/img/img_btn_icon.png" alt=""/>Download CV</a>
        </div>
    </div>
  </section>
        )
    }
}

export default Hello;
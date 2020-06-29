import React, {
    Component
  } from 'react';

  class Modal extends Component{
      render(){
        const tags = this.props.tags.map((item,key)=>
        <li key={key}>{item}</li>
            );
          return(
<div className="modal fade portfolio-modal" id={this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
        <p className="portfolio-modal__title">{this.props.title}</p>
        <img className="portfolio-modal__img" src={this.props.hero} alt="modal_img"/>
        <p className="portfolio-modal__description">
         {this.props.description}
        </p>
        <div  className="portfolio-modal__stack">
          <p className="portfolio-modal__stack-title">Used stack:</p>
          <ul className="tags">
              {tags}
          </ul>
          <div className="portfolio-modal__link"></div>
          <a href={this.props.git} className="project-card__link">git link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
          )
      }
  }

  export default Modal;
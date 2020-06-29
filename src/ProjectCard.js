import React, {
    Component
  } from 'react';

  class ProjectCard extends Component{
      render(){
          const tags = this.props.tags.map((item,key)=>
      <li key={key}>{item}</li>
          );
          return(
      <div className="row project-card" data-toggle="modal" data-target={this.props.target} data-portfolio-tag={this.props.portfolio}>
        <div className="col-md-6 col-lg-5 project-card__img">
          <img className="" src={this.props.hero}alt="project-img"/>
        </div>
        <div className="col-md-6 col-lg-7 project-card__info">
          <h3 className="project-card__title">{this.props.title}</h3>
          <p className="project-card__description">
            {this.props.description}
          </p>
          <p className="project-card__stack">Used stack:</p>
          <ul className="tags">
           {tags}
          </ul>
          <a href={this.props.git} className="project-card__link">Git link</a>
        </div>
      </div>
          )
      }
  }

  export default ProjectCard
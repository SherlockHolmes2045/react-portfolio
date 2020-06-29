import React, {
    Component
  } from 'react';

  class Resume extends Component{
      render(){
          return(
            <div className="resume-list__block">
            <p className="resume-list__block-title">{this.props.title}</p>
            <p className="resume-list__block-date">{this.props.date}</p>
            <p>
              {this.props.content}
            </p>
          </div>
          )
      }
  }

  export default Resume;
import React, {
    Component
  } from 'react';

class Skill extends Component{

    render(){
        return(
            <div className="progress-list__skill">
                <p>
                  <span className="progress-list__skill-title">{this.props.title}</span>
                  <span className="progress-list__skill-value">{this.props.value}</span>
                </p>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow={this.props.progress} aria-valuemin={0} aria-valuemax={100}></div>
                </div>
            </div>
        )
    }
}

export default Skill;
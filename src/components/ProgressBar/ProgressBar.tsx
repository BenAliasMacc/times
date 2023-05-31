import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
  render() {
    const props = this.props;

    

    return (
      <div id="progress-bar">
        <div className={`step ${props.isLoading ? 'loading' : props.isCompleted ? 'completed': 'active'}`}>1</div>
        <div className={`step ${props.currentStep === 2 ? (props.isLoading ? 'loading' : props.isCompleted ? 'completed' : 'active') : null}`}>2</div>
        <div className={`step ${props.currentStep === 3 ? (props.isLoading ? 'loading' : props.isCompleted ? 'completed' : 'active') : null}`}>3</div>        
        <div className={`step ${props.currentStep > 4 ? 'completed' : props.currentStep == 4 ? 'active' : ''}`}>4</div>
      </div>
    );
  }
}

export default ProgressBar;

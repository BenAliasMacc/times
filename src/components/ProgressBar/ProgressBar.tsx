import React from 'react';
import './ProgressBar.css';

class ProgressBar extends React.Component {
  render() {
    const { currentStep } = this.props;

    return (
      <div id="progress-bar">
        <div className={`step ${currentStep > 1 ? 'completed' : 'active'}`}>1</div>
        <div className={`step ${currentStep > 2 ? 'completed' : currentStep == 2 ? 'active' : ''}`}>2</div>
        <div className={`step ${currentStep > 3 ? 'completed' : currentStep == 3 ? 'active' : ''}`}>3</div>
        <div className={`step ${currentStep > 4 ? 'completed' : currentStep == 4 ? 'active' : ''}`}>4</div>
      </div>
    );
  }
}

export default ProgressBar;

import './ProgressBar.css';

const ProgressBar = (props) => {

  const getStepClass = (step) => {
    const { isLoading, currentStep, isCompleted } = props;

    switch (step) {
      case 1:
        return currentStep > 1 || isCompleted ? 'completed' : isLoading ? 'loading' :  'active';
      case 2:
        if (currentStep === 2) return isLoading ? 'loading' : isCompleted ? 'completed' : 'active';
        if (currentStep > 2) return 'completed';
        return null;
      case 3:
        if (currentStep === 3) return isLoading ? 'loading' : isCompleted ? 'completed' : 'active';
        if (currentStep > 3) return 'completed';
        return null;
      case 4:
      default:
        return '';
    }
  }

  return (
    <div id="progress-bar">
      <div className={`step ${getStepClass(1)}`}>1</div>
      <div className={`step ${getStepClass(2)}`}>2</div>
      <div className={`step ${getStepClass(3)}`}>3</div>
      <div className={`step ${getStepClass(4)}`}>4</div>
    </div>
  );
}

export default ProgressBar;

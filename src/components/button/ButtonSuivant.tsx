import './ButtonSuivant.css'

const ButtonSuivant = ({ setCurrentStep, currentStep }) => {

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <button className="buttonSuivant" onClick={handleNextStep}>Suivant</button>
  )
};

export default ButtonSuivant;
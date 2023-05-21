import './formulaire.css';
import { useState } from 'react';

const Formulaire = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Étape 1', 'Étape 2', 'Étape 3'];
    
    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
    
    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };
    
    const progress = (currentStep / (steps.length - 1)) * 100;

    console.log(currentStep);
    
    
    return (
        <div className='formulaire-container'>
            <div className='progress-bar'>
                <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
                {steps.map((step, index) => (
                    <div className={`progress-bar__step ${index === currentStep ? 'active' : ''}`} style={{ left: `${(index / (steps.length - 1)) * 100}%` }} >
                        {index + 1}
                    </div>
                ))

                }
            </div>

            <div>{steps[currentStep]}</div>

            <div className="button-container">
                {currentStep > 0 && (
                    <button onClick={handlePrevious}>Précédent</button>
                )}
                {currentStep < steps.length - 1 && (
                    <button onClick={handleNext}>Suivant</button>
                )}
            </div>
        </div>
    )
};

export default Formulaire;
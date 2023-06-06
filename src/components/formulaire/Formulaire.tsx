import './formulaire.css';
import { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import Etape1 from '../EtapesFormulaire/Etape1';
import Etape2 from '../EtapesFormulaire/Etape2';

const FormComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className='formulaire'>
      <ProgressBar 
        currentStep={currentStep} 
        isLoading={isLoading}
        isCompleted={isCompleted}
      />

      {/* Contenu de l'étape 1 */}
      <div className='etape-container'>
        {currentStep === 1 && (
          <Etape1 
            setCurrentStep={setCurrentStep}  
            currentStep={currentStep}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
          />
        )}

        {/* Contenu de l'étape 2 */}
        {currentStep === 2 && (
          <Etape2
            setCurrentStep={setCurrentStep}  
            currentStep={currentStep}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
          />
        )}

        {/* Contenu de l'étape 3 */}
        {currentStep === 3 && (
          <div>
            <h2>Étape 3</h2>
            {/* ... Autres champs et boutons de l'étape 3 ... */}
            {/* <button onClick={handleNextStep}>Suivant</button> */}
          </div>
        )}

        {/* Contenu de l'étape 4 */}
        {currentStep === 4 && (
          <div>
            <h2>Étape 4</h2>
            {/* ... Autres champs et boutons de l'étape 4 ... */}
            {/* <button onClick={handleNextStep}>Suivant</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;

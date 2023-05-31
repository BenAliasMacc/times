import './ButtonSuivant.css'

const ButtonSuivant = (props:any) => {

  const handleNextStep = async () => {
    props.isCompleted ? props.setCurrentStep(props.currentStep + 1) : null;
    
    props.setIsLoading(true);

    try {
      await fakeApiCall();
      props.setIsCompleted(true);
    } catch (error) {
      props.setIsCompleted(false);
    }

    props.setIsLoading(false);
  };

  const fakeApiCall = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simuler la résolution de la promesse
        const isSuccess = Math.random() < 10;
        if (isSuccess) {
          resolve();
        } else {
          reject(new Error('La promesse a échoué'));
        }
      }, 2000); // Temps d'attente simulé de 2 secondes
    });
  };

  return (
    <button className="buttonSuivant" onClick={handleNextStep}>Suivant</button>
  )
};

export default ButtonSuivant;
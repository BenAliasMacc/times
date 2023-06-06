import './ButtonSuivant.css'

const ButtonSuivant = (props:any) => {

  const handleNextStep = async () => {

    console.log(props);
    

    if (props?.formPart1) {
      props.setFormPart1(false);
    };
    
    if (props.isCompleted) {
      props.setIsCompleted(false);
      return props.setCurrentStep(props.currentStep + 1);
    };
    
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
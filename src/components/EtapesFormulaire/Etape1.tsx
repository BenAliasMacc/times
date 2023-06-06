import ButtonSuivant from '../Button/ButtonSuivant';
import LoaderFormulaire from '../LoaderFormulaire/LoaderFormulaire';
import ValidationFormulaire from '../ValidationFormulaire/ValidationFormulaire';
import './Etape1.css';

const Etape1 = (props) => {

    return (
        <div className='etape1'>
            {
                props.isLoading ? <LoaderFormulaire /> : 
                props.isCompleted ? <ValidationFormulaire {...props} /> : 
                <div className='etape1__container'>
                    <div className='etape1__title'>
                        <h3>Détails du vol</h3>
                        <p>Le calcul de votre indemnitée est 100% gratuite</p>
                    </div>
                    <p style={{textAlign: "center", width: "100%", fontWeight: "bold"}}>Scanner votre carte d'embarquement</p>

                    <form className='etape1__form' action="">
                        <p>Ou remplissez manuellement</p>
                        <div className='etape1__form-inputs'>
                            <div className='etape1__form-input etape1__departure'>
                                <label htmlFor="departure">Aéroport de départ</label>
                                <input type="text" name='departure' id='departure' />
                            </div>
                            <div className='etape1__form-input etape1__arrival'>
                                <label htmlFor="arrival">Aéroport d'arrivée</label>
                                <input type="text" name='arrival' id='arrival' />
                            </div>
                            <div className='etape1__form-input etape1__flightNumber'>
                                <label htmlFor="flightNumber">Numéro de vol</label>
                                <input type="text" name='flightNumber' id='flightNumber' />
                            </div>
                            <div className='etape1__form-input etape1__date'>
                                <label htmlFor="date">Date du voyage</label>
                                <input type="text" name='date' id='date' />
                            </div>
                        </div>
                        <ButtonSuivant {...props} />
                    </form>
                </div>
            }
        </div>
    )
}

export default Etape1;
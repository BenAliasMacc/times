import './ValidationFormulaire.css';
import Validation from '../../assets/validation.svg';

const ValidationFormulaire = () => {
    return (
        <div className='validationFormulaire'>
            <div className='validationFormulaire__title'>
                <img src={Validation} alt="" />
                <p>Vous êtes<br /><span>éligible</span></p>
            </div>
        </div>
    )
};

export default ValidationFormulaire;
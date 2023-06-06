import './ValidationFormulaire.css';
import Validation from '../../assets/validation.svg';
import ButtonSuivant from '../Button/ButtonSuivant';

const ValidationFormulaire = (props: any) => {
    return (
        <div className='validationFormulaire'>
            <div className='validationFormulaire__title'>
                <img src={Validation} alt="" />
                <p>Vous êtes<br /><span>éligible</span></p>
            </div>
            <p>Vous êtes indemnisable à hauteur de</p>
            <p style={{ fontSize: "40px"}}>XXX €</p>
            <p>Cliquez sur suivant pour bénéficier de 50% de l’indemnité</p>
            <ButtonSuivant {...props} />
        </div>
    )
};

export default ValidationFormulaire;    
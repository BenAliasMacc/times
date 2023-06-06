import './AuthLetter.css';
import download from "../../assets/download.svg"
import ButtonSuivant from '../Button/ButtonSuivant';

const AuthLetter = (props) => {
    return (
        <div className='authLetter'>
            <h3>Lettre de procuration</h3>
            <p>Nous avons bien généré votre lettre n°XXXX</p>
            <a className='authLetter__download' href="/" target="_blank">
                <p>Télécharger ma lettre de procuration</p>
                <img src={download} alt="téléchargement" /> 
            </a>
            <p>ou bien la recevoir par mail</p>
            <label htmlFor="email"></label>
            <input type="email" id='email' />
            <ButtonSuivant {...props} />
        </div>
    )
};

export default AuthLetter;
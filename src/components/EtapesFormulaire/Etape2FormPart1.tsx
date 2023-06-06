import ButtonSuivant from "../Button/ButtonSuivant";

const Etape2FormPart1 = (props) => {
    return (
        <div>
            <p>Pour nous occuper de récupérer votre indemnité, veuillez accepter de générer une lettre de procuration Times Air.</p>
            <form className='etape2__form' action="">
                <div className='etape2__form-inputs'>
                    <div className='etape2__form-input etape2__lastname'>
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" name='lastname' id='lastname' />
                    </div>
                    <div className='etape2__form-input etape2__firstname'>
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" name='firstname' id='firstname' />
                    </div>
                </div>
                <ButtonSuivant {...props} />
            </form>
        </div>
    )
};

export default Etape2FormPart1;
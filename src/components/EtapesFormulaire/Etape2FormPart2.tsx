import ButtonSuivant from "../Button/ButtonSuivant";

const Etape2FormPart2 = (props) => {
    return (
        <>
            <p>Veuillez signer la lettre de procuration</p>
            <form className='etape2__form' action="">
                <div className='etape2__form-inputs'>
                    SIGNATURE
                </div>
                <input type="checkbox" />
                <ButtonSuivant {...props} />
            </form>
        </>
    )
}

export default Etape2FormPart2;
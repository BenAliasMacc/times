import './Etape2.css';
import LoaderFormulaire from '../LoaderFormulaire/LoaderFormulaire';
import { useState } from 'react';
import Etape2FormPart1 from './Etape2FormPart1';
import Etape2FormPart2 from './Etape2FormPart2';
import AuthLetter from '../AuthLetter/AuthLetter';

const Etape2 = (props) => {

    const [formPart1, setFormPart1] = useState(true);

    return (
        <div className='etape2'>
            {
                props.isLoading ? <LoaderFormulaire /> :
                props.isCompleted ? <AuthLetter {...props} /> :
                <div className='etape2__container'>
                    <h3>Lettre de procuration</h3>
                    {formPart1 ? <Etape2FormPart1 formPart1={formPart1} setFormPart1={setFormPart1} /> : <Etape2FormPart2 {...props} />}
                </div>
            }
        </div>
    )
}

export default Etape2
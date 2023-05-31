import './LoaderFormulaire.css';
import { Oval } from  'react-loader-spinner';

const LoaderFormulaire = () => {
  return (
    <div className='loaderFormulaire'>
        <Oval
            height = "87"
            width = "87"
            radius = "9px"
            color = "#7D8DDF"
            secondaryColor="#DEE1F2"
            ariaLabel = 'three-dots-loading'   
            strokeWidth={5}
            wrapperStyle
            wrapperClass
        />
        <p>Vérification de l’éligibilité de l’indemnité <br/> grâce à l’API de OAG</p>
    </div>
  )
}

export default LoaderFormulaire
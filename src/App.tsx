import './App.css';
import ButtonCalculIndemnite from './components/Button/ButtonCalculeIndemnite';
import ButtonSuivant from './components/Button/ButtonSuivant';
import CardAvantage from './components/Card/CardAvantage';
import Formulaire from './components/Formulaire/Formulaire';
import gainDeTemps from './assets/gain-de-temps 1.svg';
import avion from './assets/avion 3.svg';
import DividerMiddle from './components/Divider/DividerMiddle';

function App() {

  return (
    <div className='app'>
      <ButtonCalculIndemnite />
      <ButtonSuivant />
      <CardAvantage image={gainDeTemps} title="Gain de Temps" content="Toutes les démarches administratives sont pour nous."  />
      <img src={avion} alt="" />
      <DividerMiddle />
      <Formulaire />
    </div>
  )
}

export default App

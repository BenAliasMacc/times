import './App.css';
import ButtonCalculIndemnite from './components/button/ButtonCalculeIndemnite';
import ButtonSuivant from './components/button/ButtonSuivant';
import CardAvantage from './components/card/CardAvantage';
import Formulaire from './components/formulaire/Formulaire';
import gainDeTemps from './assets/gain-de-temps 1.svg';
import avion from './assets/avion 3.svg';
import DividerMiddle from './components/Divider/DividerMiddle';

function App() {

  return (
    <>
      <ButtonCalculIndemnite />
      <ButtonSuivant />
      <CardAvantage image={gainDeTemps} title="Gain de Temps" content="Toutes les démarches administratives sont pour nous."  />
      <img src={avion} alt="" />
      <DividerMiddle />
      <Formulaire />
    </>
  )
}

export default App

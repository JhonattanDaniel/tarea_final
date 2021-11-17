import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderDaniel from './components/header';
import FooterDaniel from './components/footer';
//import InformationDaniel from './components/information';
import Tabla from './components/information/tabla.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderDaniel></HeaderDaniel>
      </header>
      <Tabla></Tabla>
      <footer>
      <FooterDaniel></FooterDaniel>
      </footer>
      
    </div>
  );
}

export default App;

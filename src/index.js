import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import Header from './components/Header';
import Home from './pages/Home';


//jsx


ReactDOM.render(
  <div className="main__wrapper"> {/*recebendo os componentes*/}
    <div className="main__container">
      <Header/>
      <Home/>
    </div>
    
  </div>
  ,
  document.getElementById('root')
);


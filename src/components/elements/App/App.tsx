import React from 'react';
import Main from '../../pages/Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App_wrapper_header'>
        <Header title='Осмотр'></Header>        
      </div>
      <div className='App_wrapper_main-footer'>
        <Main></Main>
        <Footer></Footer> 
      </div> 
         
    </div>
  );
}

export default App;

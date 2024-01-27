import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

function App() {

  const  [clicks,setClicks] = React.useState(0);

  function increaseClicks(){
    setClicks(clicks + 1)
  }

  function resetClicks() {
    setClicks(0)

  }
    
  

  return (
    <div className="App">
      <header className="App-header">
       <RedButton onClick={increaseClicks}>Не нажимать</RedButton>
       <Counter>И все же ты нажал {clicks} раз</Counter>
       <BlueButton onClick={resetClicks}>Сброс</BlueButton>

      </header>
    </div>
  );
}

export default App;

const RedButton = styled.button({

  height:200,
  width:200,
  backgroundColor:'#E80000',
  color:'#FFFFFF',
  fontSize:18,
  fontWeight:700,
  borderRadius:'50%',
  border:'3px solid #FFFFFF',
  cursor:'pointer',

  '&:hover': {
    backgroundColor: '#F80000',
  },
  '&:active': {
    backgroundColor: '#D80000',
  },

});

const Counter = styled.p({
  fontSize:24,
  color: '#FFFFFF',
});



const BlueButton = styled.button({

  height:100,
  width:200,
  backgroundColor:'#1E90FF',
  color:'#FFFFFF',
  fontSize:18,
  fontWeight:700,
  borderRadius:'0%',
  border:'3px solid #FFFFFF',
  cursor:'pointer',

  '&:hover': {
    backgroundColor: '#6495ED',
  },
  '&:active': {
    backgroundColor: '#0000FF',
  },

});
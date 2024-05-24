import logo from './logo.svg';
import './App.css';
import {useState,useEffect}from 'react'


function App() {
  

const [ha,setha]=useState(0)
useEffect(()=>{
 console.log('attayen ')

},[ha])


function handleclick(){
  setha(ha+1)

}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <button onClick ={handleclick}>Cliquer ici</button>
        
        
      </header>
    </div>
  );
}

export default App;

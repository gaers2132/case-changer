import './App.css';
import React, {useState} from 'react';
import Main from './Main'
import Header from './Header'

function App() {
    const [darkMode, setDarkMode] = useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prev => !prev)
        if(darkMode){
          document.body.style = 'background: white;'
        }else{
          document.body.style = 'background: rgb(30, 28, 28);'
        }
        
    }
  return (
    <div className='container'>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <Main darkMode={darkMode} />
    </div>
  );
}

export default App;

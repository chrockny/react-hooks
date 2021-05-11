import React,{useState} from 'react';
import Header from './components/Header';
import Characters from './components/Character';
import ThemeContext from './context/ThemeContext';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const changeTheme = ()=>{
    setDarkMode(!darkMode);
  }
  return (
    <div>
    <ThemeContext.Provider value={darkMode ? "#000"
    : "#fff"}>
    <Header changeTheme={changeTheme}/>
    <Characters/>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;

import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = (props) => {
    const color = useContext(ThemeContext)
    const {changeTheme} = props;

    
    return (
        <div className='Header'>
            <h1  style={{color}}>ReactHoooks</h1>
            <button type="button" onClick={changeTheme}>
                {color === "#000" ? "Dark Mode"
                : "Light Mode"}
            </button>
        </div> 
    );
    };

export default Header;
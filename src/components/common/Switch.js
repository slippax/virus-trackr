import React, {useState} from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
export const Switch = (props) => {
    const [isDarkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        if(isDarkMode){
            props.clicked(!isDarkMode);
        }
        if(!isDarkMode){
            props.clicked(!isDarkMode);
        }
        setDarkMode(!isDarkMode);
      };
    return (
        <div>
            <DarkModeSwitch sunColor='#23272a' moonColor='#ffffff'
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={40}
            />
        </div>
    );
}
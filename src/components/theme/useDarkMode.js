import { useState } from 'react';

export const useDarkMode = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('darkTheme') === 'true' ? true : false);

    const handleChange = () => {
        localStorage.setItem('darkTheme', !isDarkTheme ? "true" : "false")
        setIsDarkTheme(!isDarkTheme);
        window.location.reload();
    }

    return {isDarkTheme, setIsDarkTheme, handleChange}
}

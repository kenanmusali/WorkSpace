import  { useState, useEffect } from 'react';
import iconLogo from '../../../assets/logo/Notes.svg';
import { useLanguage } from '../../../hooks/languageContext';  
import languageData from '../../../utils/languageData';
import iconSidebar from '../../../assets/icons/Sidebar.svg';
import '../../../style/close.css'

const Header = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];

    const [isClosed, setIsClosed] = useState(() => {
        // Retrieve initial state from localStorage
        const storedValue = localStorage.getItem('isClosed');
        return storedValue === 'true'; // Convert to boolean
    });

    const toggleClass = () => {
        const newState = !isClosed;
        setIsClosed(newState);
        localStorage.setItem('isClosed', newState); // Update localStorage

        // Add or remove the class on the body element
        if (newState) {
            document.body.classList.add('ClosedSb');
        } else {
            document.body.classList.remove('ClosedSb');
        }
    };

    useEffect(() => {
        // Sync state with localStorage on mount
        const storedValue = localStorage.getItem('isClosed');
        if (storedValue === 'true') {
            document.body.classList.add('ClosedSb');
        } else {
            document.body.classList.remove('ClosedSb');
        }
    }, []);

    return (
        <div>
            <div className={`SbItemTop ${isClosed ? 'ClosedSb' : ''}`}>
                <div className="TopSecUp">
                    <div className="LogoGroup">
                        <img src={iconLogo} draggable="false" alt="Logo" />
                        <p className="LogoText">{currentLanguage.headText}</p>
                        <p className="LogoText1">v1.1.0</p>
                    </div>
                    <img
                        className="IconHover IconToggle"
                        src={iconSidebar}
                        draggable="false"
                        alt="Toggle"
                        onClick={toggleClass} // Add onClick handler
                    />
                </div>
                <div className="TopSecDown">
                    <p>{currentLanguage.headText}</p>
                    <p>{currentLanguage.version}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;

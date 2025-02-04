import { useState, useEffect } from 'react';
import iconLogo from '../../../assets/logo/Notes.svg';
import { useLanguage } from '../../../hooks/languageContext';
import languageData from '../../../utils/languageData';
import iconSidebar from '../../../assets/icons/Sidebar.svg';
import '../../../style/close.css'

const Header = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    const [isClosed, setIsClosed] = useState(() => {
        const storedValue = localStorage.getItem('isClosed');
        return storedValue === 'true';
    });

    const toggleClass = () => {
        const newState = !isClosed;
        setIsClosed(newState);
        localStorage.setItem('isClosed', newState);

        if (newState) {
            document.body.classList.add('ClosedSb');
        } else {
            document.body.classList.remove('ClosedSb');
        }
    };

    useEffect(() => {
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
                <div className="TopSecUp " >
                    <div className="LogoGroup">
                        <img className='Icon' src={iconLogo} draggable="false" />
                        <p className="LogoText">{currentLanguage.headText}</p>
                        <p className="LogoText1">v1.1.0</p>
                    </div>

                    <span className="PopUpLeft" data-alt={currentLanguage.sidebar}>
                        <img
                            className="IconHover IconToggle Icon"
                            src={iconSidebar}
                            draggable="false"
                            alt="Sidebar"
                            onClick={toggleClass}
                        />
                    </span>

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

import  { useState, useEffect } from 'react';
import iconLogo from '../../../assets/logo/Notes.svg';
import iconSidebar from '../../../assets/icons/Sidebar.svg';
import '../../../style/close.css'

const Header = () => {
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
                        <p className="LogoText">Notes</p>
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
                    <p>Notes</p>
                    <p>Version 1.1.0</p>
                </div>
            </div>
        </div>
    );
};

export default Header;

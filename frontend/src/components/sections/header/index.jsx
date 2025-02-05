import iconLogo from '../../../assets/logo/Notes.svg';
import { useLanguage } from '../../../hooks/languageContext';
import languageData from '../../../utils/languageData';
import iconSidebar from '../../../assets/icons/Sidebar.svg';
import '../../../style/close.css';
import SidebarVisibility from '../../../hooks/sbVisibility';


const Header = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];
    const { isClosed, toggleClass, sidebarRef, toggleIconRef } = SidebarVisibility();
    return (
        <div ref={sidebarRef}>
            <div className={`SbItemTop ${isClosed ? 'ClosedSb' : ''}`}>
                <div className="TopSecUp">
                    <div className="LogoGroup">
                        <img className="Icon" src={iconLogo} draggable="false" />
                        <p className="LogoText">{currentLanguage.headText}</p>
                        <p className="LogoText1">v1.1.0</p>
                    </div>

                    <span className="PopUpLeft" data-alt={currentLanguage.sidebar}>
                        <img
                            ref={toggleIconRef} 
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

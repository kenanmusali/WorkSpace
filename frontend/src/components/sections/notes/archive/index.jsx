import iconArchive from '../../../../assets/icons/Archive.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';
import { NavLink } from 'react-router-dom'

const Archive = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <>
            <NavLink to="/archive" className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className="p">{currentLanguage.archive}</p>
                    <img src={iconArchive} draggable="false" />
                </div>
            </NavLink>
        </>
    )
}

export default Archive
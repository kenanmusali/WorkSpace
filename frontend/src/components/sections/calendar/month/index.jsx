import { NavLink } from 'react-router-dom';
import iconMonth from '../../../../assets/icons/Month.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Month = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <>
            <NavLink to="/month" className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className="p">{currentLanguage.month}</p>
                    <img src={iconMonth} draggable="false" />
                </div>
            </NavLink>
        </>
    )
}

export default Month
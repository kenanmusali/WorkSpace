import { NavLink } from 'react-router-dom';
import iconDay from '../../../../assets/icons/Day.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Day = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <NavLink to="/day" className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.day}</p>
                    <img className='Icon' src={iconDay} draggable="false" />
                </div>
            </NavLink>
        </>
    )
}

export default Day
import { NavLink } from 'react-router-dom';
import iconYear from '../../../../assets/icons/Year.svg';
import { useLanguage } from '../../../../hooks/languageContext';
import languageData from '../../../../utils/languageData';


const Year = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <>
            <NavLink to="/year" className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.year}</p>
                    <img className='Icon' src={iconYear} draggable="false" />
                </div>
            </NavLink>
        </>
    )
}

export default Year
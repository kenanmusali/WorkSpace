import { NavLink } from 'react-router-dom';
import iconSchedule from '../../../../assets/icons/Schedule.svg';
import { useLanguage } from '../../../../hooks/languageContext';
import languageData from '../../../../utils/languageData';

const Schedule = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <>
            <NavLink to="/schedule" className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.schedule}</p>
                    <img src={iconSchedule} draggable="false" />
                </div>
            </NavLink>
        </>
    )
}

export default Schedule
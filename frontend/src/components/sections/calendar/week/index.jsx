import { NavLink } from 'react-router-dom';
import iconWeek from '../../../../assets/icons/Week.svg';
import { useLanguage } from '../../../../hooks/languageContext';
import languageData from '../../../../utils/languageData';

const Week = () => {
  const { language } = useLanguage();
  const currentLanguage = languageData[language] || languageData['en'];
  return (
    <>
      <NavLink to="/week" className="ItemSectionGroup">
        <div className="ItemSection">
          <p className='p'>{currentLanguage.week}</p>
          <img className='Icon' src={iconWeek} draggable="false" />
        </div>
      </NavLink>
    </>
  )
}

export default Week
import { useLanguage } from '../../../hooks/languageContext';  
import languageData from '../../../utils/languageData';
import iconRefresh from '../../../assets/icons/refresh.svg';

const Refresh = () => {
  const { language } = useLanguage();  

  const handleRefresh = () => {
    window.location.reload();
  };
  const currentLanguage = languageData[language] || languageData['en'];

  return (
    <div>
      <div className="ItemSectionGroup">
        <div className="ItemSection" onClick={handleRefresh}>
          <p className='p'>{currentLanguage.refresh}</p>
          <img className='Icon' src={iconRefresh} draggable="false" alt="refresh-icon" />
        </div>
      </div>
    </div>
  );
};

export default Refresh;

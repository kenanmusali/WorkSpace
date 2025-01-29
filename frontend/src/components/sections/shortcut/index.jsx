import { useLanguage } from '../../../hooks/languageContext';  
import languageData from '../../../utils/languageData';
import iconShortcut from '../../../assets/icons/Shortkey.svg';

const Shortcut = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.shortcut}</p>
                    <img src={iconShortcut} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Shortcut
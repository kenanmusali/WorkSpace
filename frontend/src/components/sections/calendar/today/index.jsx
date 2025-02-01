import iconToday from '../../../../assets/icons/Today.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Today = () => {

    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.today}</p>
                    <img className='Icon' src={iconToday} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Today
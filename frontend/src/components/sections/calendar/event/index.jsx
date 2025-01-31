import iconAddCalendar from '../../../../assets/icons/AddCalendar.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Event = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.createEvent}</p>
                    <img src={iconAddCalendar} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Event
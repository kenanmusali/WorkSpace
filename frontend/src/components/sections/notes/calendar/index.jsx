import iconCalendar from '../../../../assets/icons/Calendar.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Calendar = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className="p">{currentLanguage.calendar}</p>
                    <img src={iconCalendar} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Calendar
import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconReminder from '../../../../../../../assets/icons/Reminder.svg'

const Reminder = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.addReminder}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconReminder}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Reminder
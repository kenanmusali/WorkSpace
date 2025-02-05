import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconShortcut from '../../../../../../../assets/icons/TextShortcut.svg'

const Shortcut = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.shortcut}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconShortcut}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Shortcut
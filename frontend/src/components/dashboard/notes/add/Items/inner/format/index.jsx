import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconFormat from '../../../../../../../assets/icons/TextFormat.svg'

const Format = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.sidebar}>
                    <img
                        className="IconHover IconToggle Icon"
                        src={iconFormat}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Format
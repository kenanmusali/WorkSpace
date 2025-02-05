import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconEmoji from '../../../../../../../assets/icons/TextEmoji.svg'

const Emoji = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.emoji}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconEmoji}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Emoji
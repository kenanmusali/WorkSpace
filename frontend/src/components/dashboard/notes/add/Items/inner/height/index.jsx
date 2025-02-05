import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconSpacingY from '../../../../../../../assets/icons/TextSpacingY.svg'

const LetterHeight = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.letterHeight}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconSpacingY}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default LetterHeight
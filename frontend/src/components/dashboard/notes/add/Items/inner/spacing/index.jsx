import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconSpacingX from '../../../../../../../assets/icons/TextSpacingX.svg'

const Spacing = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.letterSpacing}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconSpacingX}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Spacing
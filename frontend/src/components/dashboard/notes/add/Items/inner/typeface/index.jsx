import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconTypeface from '../../../../../../../assets/icons/TextFont.svg'

const Typeface = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.typeface}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconTypeface}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Typeface
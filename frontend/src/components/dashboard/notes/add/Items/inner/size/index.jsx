import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconSize from '../../../../../../../assets/icons/TextSize.svg'

const Size = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.size}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconSize}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Size
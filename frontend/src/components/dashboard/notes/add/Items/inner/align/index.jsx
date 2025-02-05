import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconAlign from '../../../../../../../assets/icons/TextAlignLeft.svg'

const Align = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.align}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconAlign}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Align
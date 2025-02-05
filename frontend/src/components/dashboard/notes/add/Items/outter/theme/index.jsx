import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconStyle from '../../../../../../../assets/icons/Style.svg'

const Theme = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.backgroundTheme}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconStyle}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Theme
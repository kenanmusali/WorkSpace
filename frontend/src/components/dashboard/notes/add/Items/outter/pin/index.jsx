import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconPin from '../../../../../../../assets/icons/Pin.svg'

const Pin = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.pin}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconPin}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Pin
import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconRendo from '../../../../../../../assets/icons/Rendo.svg'

const Rendo = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.rendo}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconRendo}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Rendo
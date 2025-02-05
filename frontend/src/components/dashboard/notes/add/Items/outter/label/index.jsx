import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconLabel from '../../../../../../../assets/icons/AddLabels.svg'

const Label = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.addLabels}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconLabel}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Label
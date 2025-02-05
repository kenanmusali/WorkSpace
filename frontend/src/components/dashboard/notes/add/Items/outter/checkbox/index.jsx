import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconCheckbox from '../../../../../../../assets/icons/CheckMark.svg'

const Checkbox = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.addCheckbox}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconCheckbox}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Checkbox
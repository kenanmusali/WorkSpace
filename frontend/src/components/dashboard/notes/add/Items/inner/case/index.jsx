import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconCase from '../../../../../../../assets/icons/TextCase.svg'

const Case = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.case}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconCase}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Case
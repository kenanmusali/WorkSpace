import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconImage from '../../../../../../../assets/icons/Image.svg'

const Image = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.addImage}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconImage}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Image
import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconArchive from '../../../../../../../assets/icons/Archive.svg'

const Archive = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.archive}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconArchive}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Archive
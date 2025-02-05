import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconUndo from '../../../../../../../assets/icons/Undo.svg'

const Undo = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.undo}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconUndo}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Undo
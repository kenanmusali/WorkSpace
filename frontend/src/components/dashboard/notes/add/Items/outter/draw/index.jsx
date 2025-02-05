import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconDraw from '../../../../../../../assets/icons/Draw.svg'

const Draw = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpBottom" data-alt={currentLanguage.addDrawing}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconDraw}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default Draw
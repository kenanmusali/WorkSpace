import iconLabels from '../../../../assets/icons/AddLabels.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Label = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <div>
            <div className="ItemSectionGroup ">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.addLabels}</p>
                    <img className='Icon' src={iconLabels} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Label
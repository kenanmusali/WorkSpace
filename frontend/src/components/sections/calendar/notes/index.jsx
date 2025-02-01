import iconNotes from '../../../../assets/icons/AddNotes.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Notes = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="ItemSectionGroup" >
                <div className="ItemSection">
                    <p className="p">{currentLanguage.myNotes}</p>
                    <img className='Icon' src={iconNotes} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Notes
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const AddNotes = () => {
  const { language } = useLanguage(); 
  const currentLanguage = languageData[language] || languageData['en'];

  return (
    <div>
      <div className="AddArea">
        <div className="AddGroup">
          <div className="addNotesOff">
            <p>{currentLanguage.addNote}</p>
            
          </div>
        </div>
      </div>
      </div>
  )
}

export default AddNotes
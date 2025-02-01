import iconSearch from '../../../../assets/icons/Search.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';
const SearchNotes = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="sbSearch">
                <input className='SearchInput' type="text" id="" placeholder={currentLanguage.search} />
                <img className=' Icon' src={iconSearch} draggable="false" />
            </div>
        </div>
    )
}

export default SearchNotes


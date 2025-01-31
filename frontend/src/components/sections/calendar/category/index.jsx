import iconAddCategory from '../../../../assets/icons/AddCategory.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';

const Category = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className='p'>{currentLanguage.addCategory}</p>
                    <img src={iconAddCategory} draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Category
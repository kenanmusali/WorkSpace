import { NavLink } from "react-router-dom"
import iconTrash from '../../../../assets/icons/Trash.svg';
import { useLanguage } from '../../../../hooks/languageContext';  
import languageData from '../../../../utils/languageData';


const Trash = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <>
            <NavLink to="/trash" className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className="p">{currentLanguage.trash}</p>
                    <img src={iconTrash} draggable="false" />
                </div>
            </NavLink>
        </>
    )
}

export default Trash
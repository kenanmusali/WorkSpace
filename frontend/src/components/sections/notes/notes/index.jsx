import { NavLink } from "react-router-dom"
import iconNotes from '../../../../assets/icons/AddNotes.svg';
import { useLanguage } from '../../../../hooks/languageContext';
import languageData from '../../../../utils/languageData';

const Notes = () => {

    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <>
            <NavLink to="/notes" className="ItemSectionGroup">
                <div className="ItemSection">
                    <p className="p">{currentLanguage.allNotes}</p>
                    <img src={iconNotes} draggable="false" />
                </div>
            </NavLink>
        </>
    )
}

export default Notes
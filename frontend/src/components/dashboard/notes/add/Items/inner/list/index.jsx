import { useLanguage } from '../../../../../../../hooks/languageContext';
import languageData from '../../../../../../../utils/languageData';
import iconList from '../../../../../../../assets/icons/TextList.svg'

const List = () => {
    const { language } = useLanguage();
    const currentLanguage = languageData[language] || languageData['en'];

    return (
        <>
            <div className="divItemIcon">
                <div className="PopUpTop" data-alt={currentLanguage.list}>
                    <img
                        className="IconHover IconBar Icon"
                        src={iconList}
                        draggable="false"
                    />
                </div>
            </div>
        </>
    )
}

export default List
import '../../../style/account.css'
import iconSideBar from '../../../assets/icons/Sidebar.svg';
import iconUser from '../../../assets/icons/UserProfile.svg';
import { useLanguage } from '../../../hooks/languageContext';  
import languageData from '../../../utils/languageData';

const Account = () => {
    const { language } = useLanguage(); 
    const currentLanguage = languageData[language] || languageData['en'];
    return (
        <div>
            <div className="SideBarAccount sectionStyle">
                <div className="AccountGroup PopUpRight" data-alt={currentLanguage.sidebar}>
                    <img className='Icon noSelect IconHover' src={iconSideBar} data-alt="Sidebar" draggable="false" />
                    <div className="AccountSection noSelect">
                        <img className='Icon  noSelect' src={iconUser} alt="" draggable="false" />
                    </div>
                </div>





                {/* <div className="divLogAccount"></div> */}
            </div>
        </div>
    )
}

export default Account
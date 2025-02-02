import '../../../style/account.css'
import iconSideBar from '../../../assets/icons/Sidebar.svg';
import iconUser from '../../../assets/icons/UserProfile.svg';

const Account = () => {
    return (
        <div>
            <div className="SideBarAccount sectionStyle">
                <div className="AccountGroup">
                    <img className='Icon noSelect IconHover' src={iconSideBar} alt="" draggable="false" />
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
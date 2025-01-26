// styles
import '../../../style/sidebar/sidebar.css';
import '../../../style/sidebar/sb-top.css';
import '../../../style/sidebar/sb-search.css';
import '../../../style/sidebar/sb-item.css';

// icons
import iconLogo from '../../../assets/logo/Notes.svg';
import iconSidebar from '../../../assets/icons/Sidebar.svg';
import iconSearch from '../../../assets/icons/Search.svg';
import iconNotes from '../../../assets/icons/AddNotes.svg';
import iconCalendar from '../../../assets/icons/Calendar.svg';
import iconArchive from '../../../assets/icons/Archive.svg';
import iconLabels from '../../../assets/icons/AddLabels.svg';
import iconTrash from '../../../assets/icons/Trash.svg';
import iconSettings from '../../../assets/icons/Settings.svg';
import iconRefresh from '../../../assets/icons/Refresh.svg';
import iconShortkey from '../../../assets/icons/Shortkey.svg';

// react-router-dom
import { NavLink } from 'react-router-dom';

// routes

const Sidebar = () => {
    return (
        <div>
            <div className="SidebarArea noSelect">
                <div className="Sidebar sectionStyle">
                    <div className="SbTop">
                        <div className="SbItemTop">

                            <div className="TopSecUp">
                                <div className="LogoGroup ">
                                    <img src={iconLogo} draggable="false" alt="Logo" />

                                </div>
                                <img className="IconHover IconToggle" src={iconSidebar} draggable="false" />

                            </div>
                            <div className="TopSecDown">
                                <p>Notes</p>
                                <p>Version 1.1.0</p>
                            </div>
                        </div>

                        <div className="hr"></div>

                        <div className="sbSearch">
                            <input className='SearchInput' type="text" id="" placeholder='Search' />
                            <img className='IconHover' src={iconSearch} draggable="false" />
                        </div>

                        <div className="hr"></div>

                        <div className="SbItem">
                            <NavLink to="/AllNotes" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p  className="p">All notes</p>
                                    <img src={iconNotes} draggable="false" />
                                </div>
                            </NavLink>
                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Add labels</p>
                                    <img src={iconLabels} draggable="false" />
                                </div>
                            </div>
                            <NavLink to="/Archive" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className="p">Archive</p>
                                    <img src={iconArchive} draggable="false" />
                                </div>
                            </NavLink>
                            <NavLink to="/Calendar" className="ItemSectionGroup">
                                <div className="ItemSection">
                                 
                                    <p className="p">Calendar</p>
                                    <img src={iconCalendar} draggable="false" />
                                </div>
                            </NavLink>


                        </div>




                        <div className="hr"></div>
                    </div>



                    <div className="SbBottom">
                        <div className="hr"></div>
                        <div className="SbItem">

                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Shortkey</p>
                                    <img src={iconShortkey} draggable="false" />
                                </div>
                            </div>
                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Refresh</p>
                                    <img src={iconRefresh} draggable="false" />
                                </div>
                            </div>
                            <NavLink to="/Trash" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className="p">Trash</p>
                                    <img src={iconTrash} draggable="false" />
                                </div>
                            </NavLink>
                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Settings</p>
                                    <img src={iconSettings} draggable="false" />
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
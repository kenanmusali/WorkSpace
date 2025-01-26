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
import iconLabels from '../../../assets/icons/AddLabels.svg';
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
                                <p>Calendar</p>
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
                            <NavLink to="/Month" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p  className="p">Month</p>
                                    <img src={iconNotes} draggable="false" />
                                </div>
                            </NavLink>
                            <NavLink to="/" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p  className="p">My notes</p>
                                    <img src={iconNotes} draggable="false" />
                                </div>
                            </NavLink>
                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Year</p>
                                    <img src={iconLabels} draggable="false" />
                                </div>
                            </div>
                            


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
// styles
import '../../../../style/sidebar/sidebar.css';
import '../../../../style/sidebar/sb-top.css';
import '../../../../style/sidebar/sb-search.css';
import '../../../../style/sidebar/sb-item.css';

// icons

import iconNotes from '../../../../assets/icons/AddNotes.svg';
import iconCalendar from '../../../../assets/icons/Calendar.svg';
import iconArchive from '../../../../assets/icons/Archive.svg';
import iconLabels from '../../../../assets/icons/AddLabels.svg';
import iconTrash from '../../../../assets/icons/Trash.svg';

// react-router-dom
import { NavLink } from 'react-router-dom';
import SearchNotes from '../../../sections/search/notes';
import Refresh from '../../../sections/refresh';
import Header from '../../../sections/header';
import SettingsNotes from '../../../sections/settings/notes';
import Shortcut from '../../../sections/shortcut';


// routes

const SidebarNotes = ({ onSidebarClick }) => {
    return (
        <div>
            <div className="SidebarArea noSelect">
                <div className="Sidebar sectionStyle">
                    <div className="SbTop">
                        <Header />

                        <div className="hr"></div>

                        <SearchNotes />

                        <div className="hr"></div>

                        <div className="SbItem">
                            <NavLink to="/notes" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className="p">All notes</p>
                                    <img src={iconNotes} draggable="false" />
                                </div>
                            </NavLink>
                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Add labels</p>
                                    <img src={iconLabels} draggable="false" />
                                </div>
                            </div>
                            <NavLink to="/archive" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className="p">Archive</p>
                                    <img src={iconArchive} draggable="false" />
                                </div>
                            </NavLink>
                            <NavLink to="/month" className="ItemSectionGroup" onClick={onSidebarClick}>
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

                            <Shortcut />
                            <Refresh />
                            <NavLink to="/trash" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className="p">Trash</p>
                                    <img src={iconTrash} draggable="false" />
                                </div>
                            </NavLink>

                            <SettingsNotes />


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SidebarNotes
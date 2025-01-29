// styles
import '../../../../style/sidebar/sidebar.css';
import '../../../../style/sidebar/sb-top.css';
import '../../../../style/sidebar/sb-search.css';
import '../../../../style/sidebar/sb-item.css';

// react-router-dom
import { NavLink } from 'react-router-dom';
import SearchNotes from '../../../sections/search/notes';
import Refresh from '../../../sections/refresh';
import Header from '../../../sections/header';
import Shortcut from '../../../sections/shortcut';
import Settings from '../../../sections/settings';
import Trash from '../../../sections/notes/trash';
import Notes from '../../../sections/notes/notes';
import Label from '../../../sections/notes/label';
import Calendar from '../../../sections/notes/calendar';
import Archive from '../../../sections/notes/archive';


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
                            <Notes />
                            <Label />
                            <Archive />
                            <NavLink to="/month" onClick={onSidebarClick} >
                                <Calendar />
                            </NavLink>
                        </div>
                        <div className="hr"></div>
                    </div>



                    <div className="SbBottom">
                        <div className="hr"></div>
                        <div className="SbItem">
                            <Shortcut />
                            <Refresh />
                            <Trash />
                            <Settings />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SidebarNotes
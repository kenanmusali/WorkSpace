// styles
import '../../../../style/sidebar/sidebar.css';
import '../../../../style/sidebar/sb-top.css';
import '../../../../style/sidebar/sb-search.css';
import '../../../../style/sidebar/sb-item.css';
import '../../../../style/sidebar/sb-list.css';

// react-router-dom
import { NavLink } from 'react-router-dom';
import SearchCalendar from '../../../sections/search/calendar';
import Refresh from '../../../sections/refresh';
import Header from '../../../sections/header';
import Settings from '../../../sections/settings/calendar';
import Trash from '../../../sections/calendar/trash';
import ListCalendar from '../../../sections/calendar/list';
import ListGroup from '../../../sections/calendar/listGroup';
import Shortcut from '../../../sections/shortcut';
import Calendar from '../../../sections/calendar/calendar';
import Event from '../../../sections/calendar/event';
import Category from '../../../sections/calendar/category';
import Notes from '../../../sections/calendar/notes';
import Today from '../../../sections/calendar/today';
import Day from '../../../sections/calendar/day';
import Week from '../../../sections/calendar/week';
import Month from '../../../sections/calendar/month';
import Year from '../../../sections/calendar/year';
import Schedule from '../../../sections/calendar/schedule';

// routes

const SidebarCalendar = ({ onSidebarClick }) => {
    return (
        <>
            <div className="SidebarArea noSelect">
                <div className="Sidebar sectionStyle">
                    <div className="SbTop">


                        <Header />


                        <div className="hr"></div>

                        <SearchCalendar />

                        <div className="hr"></div>

                        <div className="SbItem">

                            <Calendar />
                            <Event />
                            <Category />
                            <NavLink to="/notes" onClick={onSidebarClick}>
                                <Notes />
                            </NavLink>
                        </div>

                        <div className="hr"></div>
                        <div className="SbItem">
                            <Today />
                            <Day />
                            <Week />
                            <Month />
                            <Year />
                            <Schedule />
                        </div>
                        <div className="hr"></div>
                    </div>
                    <div className="SbItem">
                        <ListCalendar />
                    </div>

                    <ListGroup />



                    <div className="SbBottom">
                        <div className="hr"></div>
                        <div className="SbItem">

                            <Refresh />
                            <Shortcut />
                            <Trash />
                            <Settings />



                        </div>
                    </div>

                </div>
            </div>
            <div className="SidebarAreaSlot"></div>
        </>
    )
}

export default SidebarCalendar
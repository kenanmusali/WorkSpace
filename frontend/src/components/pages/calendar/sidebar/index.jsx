// styles
import '../../../../style/sidebar/sidebar.css';
import '../../../../style/sidebar/sb-top.css';
import '../../../../style/sidebar/sb-search.css';
import '../../../../style/sidebar/sb-item.css';

// icons

import iconNotes from '../../../../assets/icons/AddNotes.svg';
import iconCalendar from '../../../../assets/icons/Calendar.svg';
import iconAddCalendar from '../../../../assets/icons/AddCalendar.svg';
import iconAddCategory from '../../../../assets/icons/AddCategory.svg';
import iconToday from '../../../../assets/icons/Today.svg';
import iconDay from '../../../../assets/icons/Day.svg';
import iconWeek from '../../../../assets/icons/Week.svg';
import iconMonth from '../../../../assets/icons/Month.svg';
import iconYear from '../../../../assets/icons/Year.svg';
import iconSchedule from '../../../../assets/icons/Schedule.svg';
import iconShortkey from '../../../../assets/icons/Shortkey.svg';

// react-router-dom
import { NavLink } from 'react-router-dom';
import SearchCalendar from '../../../sections/search/calendar';
import Refresh from '../../../sections/refresh';
import Header from '../../../sections/header';
import Settings from '../../../sections/settings';

// routes

const SidebarCalendar = ({ onSidebarClick }) => {
    return (
        <div>
            <div className="SidebarArea noSelect">
                <div className="Sidebar sectionStyle">
                    <div className="SbTop">


                        <Header />


                        <div className="hr"></div>

                        <SearchCalendar />

                        <div className="hr"></div>

                        <div className="SbItem">

                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>View calendar</p>
                                    <img src={iconCalendar} draggable="false" />
                                </div>
                            </div>

                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Create event</p>
                                    <img src={iconAddCalendar} draggable="false" />
                                </div>
                            </div>

                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Add category</p>
                                    <img src={iconAddCategory} draggable="false" />
                                </div>
                            </div>

                            <NavLink to="/notes" className="ItemSectionGroup" onClick={onSidebarClick}>
                                <div className="ItemSection">
                                    <p className="p">My notes</p>
                                    <img src={iconNotes} draggable="false" />
                                </div>
                            </NavLink>
                        </div>

                        <div className="hr"></div>
                        <div className="SbItem">

                            <div className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Today</p>
                                    <img src={iconToday} draggable="false" />
                                </div>
                            </div>

                            <NavLink to="/day" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Day</p>
                                    <img src={iconDay} draggable="false" />
                                </div>
                            </NavLink>

                            <NavLink to="/week" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Week</p>
                                    <img src={iconWeek} draggable="false" />
                                </div>
                            </NavLink>


                            <NavLink to="/month" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className="p">Month</p>
                                    <img src={iconMonth} draggable="false" />
                                </div>
                            </NavLink>

                            <NavLink to="/year" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Year</p>
                                    <img src={iconYear} draggable="false" />
                                </div>
                            </NavLink>

                            <NavLink to="/schedule" className="ItemSectionGroup">
                                <div className="ItemSection">
                                    <p className='p'>Schedule</p>
                                    <img src={iconSchedule} draggable="false" />
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
                            <Refresh />
                            <Settings/>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SidebarCalendar
import { Route, Routes } from 'react-router'
import SidebarCalendar from './sidebar'
import Day from './day'
import Week from './week'
import Month from './month'
import Year from './year'
import Schedule from './schedule'
import Trash from './trash'

const Calendar = ({ toggleSidebar }) => {
    return (
        <div>
            <div className="divHomearea">
                <SidebarCalendar onSidebarClick={() => toggleSidebar("notes")} /> 
                <Routes>
                    <Route path="/day" element={<Day />} />
                    <Route path="/week" element={<Week />} />
                    <Route path="/month" element={<Month />} />
                    <Route path="/year" element={<Year />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/trash" element={<Trash />} />
                </Routes>
            </div>
        </div>
    );
}

export default Calendar;

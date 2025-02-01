import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SidebarCalendar from './sidebar';
import Day from './day';
import Week from './week';
import Month from './month';
import Year from './year';
import Schedule from './schedule';
import Trash from './trash';

const Calendar = ({ toggleSidebar }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (["/day", "/week", "/month", "/year", "/schedule"].includes(location.pathname)) {
            localStorage.setItem("lastCalendarRoute", location.pathname);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === "/") {
            const lastCalendarRoute = localStorage.getItem("lastCalendarRoute") || "/";
            if (lastCalendarRoute !== location.pathname) {
                navigate(lastCalendarRoute, { replace: true });
            }
        }
    }, [location, navigate]); 

    return (
        <div>
            <div className="divHomeArea">
                <SidebarCalendar onSidebarClick={() => toggleSidebar("notes")} /> 
                <Routes>
                    <Route path="/day" element={<Day />} />
                    <Route path="/week" element={<Week />} />
                    <Route path="/month" element={<Month />} />
                    <Route path="/year" element={<Year />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/trash" element={<Trash />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
            </div>
        </div>
    );
};

export default Calendar;

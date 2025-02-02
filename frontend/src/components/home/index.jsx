import { useState, useEffect } from 'react';
import '../../style/home.css';
import '../../style/responsive.css';
import '../../style/animation.css'
import Calendar from '../pages/calendar';
import Notes from '../pages/notes';
import Account from '../pages/account';

function Home() {
    const [calendarSidebarVisible, setCalendarSidebarVisible] = useState(() => {
        // Default to false if not found in localStorage
        return localStorage.getItem('calendarSidebarVisible') === 'true';
    });
    const [notesSidebarVisible, setNotesSidebarVisible] = useState(() => {
        // Default to true if not found in localStorage
        return localStorage.getItem('notesSidebarVisible') === 'true' || localStorage.getItem('calendarSidebarVisible') !== 'true';
    });

    const toggleSidebar = (sidebarType) => {
        if (sidebarType === 'calendar') {
            setCalendarSidebarVisible(true);
            setNotesSidebarVisible(false);
            localStorage.setItem('calendarSidebarVisible', 'true');
            localStorage.setItem('notesSidebarVisible', 'false');
        } else if (sidebarType === 'notes') {
            setNotesSidebarVisible(true);
            setCalendarSidebarVisible(false);
            localStorage.setItem('notesSidebarVisible', 'true');
            localStorage.setItem('calendarSidebarVisible', 'false');
        }
    };

    useEffect(() => {
        // Ensure at least one sidebar is visible on load
        if (!calendarSidebarVisible && !notesSidebarVisible) {
            setNotesSidebarVisible(true);
            localStorage.setItem('notesSidebarVisible', 'true');
            localStorage.setItem('calendarSidebarVisible', 'false');
        }
    }, [calendarSidebarVisible, notesSidebarVisible]);

    return (
        <div>
            <div className="divHomeArea">
                <div className="divHome">
                    {notesSidebarVisible && <Notes toggleSidebar={toggleSidebar} />}
                    {calendarSidebarVisible && <Calendar toggleSidebar={toggleSidebar} />}
                </div>
                <Account />
            </div>
        </div>
    );
}

export default Home;

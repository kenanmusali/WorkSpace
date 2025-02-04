import { useState, useEffect } from 'react';

const sidebarToggle = () => {
    const [calendarSidebarVisible, setCalendarSidebarVisible] = useState(() => {
        return localStorage.getItem('calendarSidebarVisible') === 'true';
    });
    const [notesSidebarVisible, setNotesSidebarVisible] = useState(() => {
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
        if (!calendarSidebarVisible && !notesSidebarVisible) {
            setNotesSidebarVisible(true);
            localStorage.setItem('notesSidebarVisible', 'true');
            localStorage.setItem('calendarSidebarVisible', 'false');
        }
    }, [calendarSidebarVisible, notesSidebarVisible]);

    return { calendarSidebarVisible, notesSidebarVisible, toggleSidebar };
}



export default sidebarToggle
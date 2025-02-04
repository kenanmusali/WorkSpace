import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SidebarNotes from './sidebar';
import AllNotes from './notes';
import Archive from './archive';
import Trash from './trash';
import HomeWeb from '../web';

const Notes = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (["/notes", "/archive", "/trash",].includes(location.pathname)) {
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
      <div className='divHome'>
        {location.pathname !== "/" && (
          <SidebarNotes onSidebarClick={() => toggleSidebar("calendar")} />
        )}
        <Routes>
          <Route path="/notes" element={<AllNotes />} />
          <Route path="/" element={<HomeWeb />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Notes;

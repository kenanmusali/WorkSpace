import sidebarToggle from '../../hooks/sidebarToggle'; 
import '../../style/home.css';
import '../../style/responsive.css';
import '../../style/animation.css';
import '../../style/popup.css';
import '../../style/add.css';
import Calendar from '../pages/calendar';
import Notes from '../pages/notes';
import Account from '../pages/account';

function Home() {
    const { calendarSidebarVisible, notesSidebarVisible, toggleSidebar } = sidebarToggle();

    return (
        <div className='divHomeArea'>
            {notesSidebarVisible && <Notes toggleSidebar={toggleSidebar} />}
            {calendarSidebarVisible && <Calendar toggleSidebar={toggleSidebar} />}
            <Account />
        </div>
    );
}

export default Home;

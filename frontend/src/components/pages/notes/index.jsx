import { Route, Routes } from 'react-router'
import SidebarNotes from './sidebar' 
import AllNotes from './notes'
import Archive from './archive'
import Trash from './trash'

const Notes = ({ toggleSidebar }) => {
    return (
        <div>
            <div className="divHomearea">
                <SidebarNotes onSidebarClick={() => toggleSidebar("calendar")} /> 
                <Routes>
                    <Route path="/notes" element={<AllNotes />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/trash" element={<Trash />} />
                </Routes>
            </div>
        </div>
    );
}

export default Notes;

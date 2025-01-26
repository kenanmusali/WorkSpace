
import { Route, Routes } from 'react-router'
import Sidebar from './sidebar'
import AllNotes from './allNotes'
import Archive from './archive'
import Trash from './trash'

const Notes = () => {
    return (
        <div>
            <div className="divHomearea">
                <Sidebar />
                <Routes>
                    <Route path="/allNotes" element={<AllNotes />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/trash" element={<Trash />} />
                </Routes>
            </div>
        </div>
    )
}

export default Notes
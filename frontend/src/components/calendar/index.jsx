
import { Route, Routes } from 'react-router'
import Sidebar from './sidebar'
import Month from './month'

const Calendar = () => {
    return (
        <div>
            <div className="divHomearea">
                <Sidebar />
                <Routes>
                    <Route path="/month" element={<Month />} />
        
                </Routes>
            </div>
        </div>
    )
}

export default Calendar
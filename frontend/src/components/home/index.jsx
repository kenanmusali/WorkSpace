
import '../../style/home.css'
import Calendar from '../calendar'
import Notes from '../notes'


function Home() {
    return (
        <div>
            <div className="divHome">
                <Notes />
                <Calendar/>
            </div>
        </div>
    )
}

export default Home



// import { useState } from 'react';
// import '../../style/home.css';
// import Calendar from '../calendar';
// import Notes from '../notes';

// function Home() {
//     const [showNotes, setShowNotes] = useState(true);
//     const [showCalendar, setShowCalendar] = useState(false);

//     return (
//         <div>
//             <div className="divHome">
//                 {showNotes && <Notes setShowNotes={setShowNotes} setShowCalendar={setShowCalendar} />}
//                 {showCalendar && <Calendar setShowNotes={setShowNotes} setShowCalendar={setShowCalendar} />}
//             </div>
//         </div>
//     );
// }

// export default Home;

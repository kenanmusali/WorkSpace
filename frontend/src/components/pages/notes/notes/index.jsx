import AddNotes from "../../../dashboard/notes/add"
import NotesGrid from "../../../dashboard/notes/grid/notes"
import '../../../../style/notes-group.css'

const Notes = () => {
  return (
    <>
      <div className="divHomeArea">
        <AddNotes />
        <div className="GroupParent">
          <NotesGrid />
        </div>
      </div>
    </>
  )
}

export default Notes
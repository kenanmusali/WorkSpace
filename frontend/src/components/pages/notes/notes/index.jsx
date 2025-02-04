import AddNotes from "../../../dashboard/notes/add"
import NotesGrid from "../../../dashboard/notes/grid/notes"

const Notes = () => {
  return (
    <>
      <div className="divHomeArea">
        <AddNotes />
        <NotesGrid />
      </div>
    </>
  )
}

export default Notes
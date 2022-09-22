import { NotesList } from "../../pages/notes";
import NotesIntroCard from "../NotesIntroCard/NotesIntroCard";
import NotesIntroCardHeading from "../NotesIntroCard/NotesIntroCardHeading";
import NotesIntroCardSummary from "../NotesIntroCard/NotesIntroCardSummary";
import NotesIntroCardTag from "../NotesIntroCard/NotesIntroCardTag";


function NotesList({ notes }: { notes: NotesList[] }) {
    return (<>
        <div className="notes-container">
            <div className="notes-heading">
                Notes
            </div>
            <div className="notes-cards">
            { notes.map((note) => (
                    <NotesIntroCard>
                    <NotesIntroCardHeading>{note.heading}</NotesIntroCardHeading>
                    <NotesIntroCardSummary>
                       {note.summary}
                    </NotesIntroCardSummary>
                    <NotesIntroCardTag>#{note.tag}</NotesIntroCardTag>
                </NotesIntroCard>
            )) }
            
            </div>
        </div>
    </>);
}

export default NotesList;
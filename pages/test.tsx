import NotesIntroCard from '../components/NotesList/NotesIntroCard'
import NotesIntroCardHeading from '../components/NotesList/NotesIntroCardHeading'
import NotesIntroCardSummary from '../components/NotesList/NotesIntroCardSummary'
import NotesIntroCardTag from '../components/NotesList/NotesIntroCardTag'

function Test() {
  return (
    <div>
      <div>
        <h1>This is a test page</h1>
        <p>Test the individual components here</p>
      </div>
      <br />
      <br />
      <h1>Notes introduction Card</h1>
      <NotesIntroCard>
        <NotesIntroCardHeading>Typescript and Set Theory</NotesIntroCardHeading>
        <NotesIntroCardSummary>
          How does set theory help to understand type assignability and
          resolution in Typescript?
        </NotesIntroCardSummary>
        <NotesIntroCardTag>#typescript</NotesIntroCardTag>
      </NotesIntroCard>
    </div>
  )
}

export default Test

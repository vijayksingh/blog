import NotesList from "../components/NotesList/NotesList"

export interface NotesList {
  heading: string;
  summary: string;
  tag: string;
  route: string;
}

function getNotesList(): NotesList[] {
  // returning example notes list for now
  return [  
    {
      heading: 'Typescript and Set Theory',
      summary: ` How does set theory help to understand type assignability and
      resolution in Typescript?`,
      tag: 'typescript',
      route: 'typescript-set-theory'
    },
  ]
}

function Notes() {
  return <>
    <NotesList notes={getNotesList()}></NotesList>
  </>
}

export default Notes

import { ReactNode } from 'react'
import styles from '../NotesList/NotesIntroCard.module.scss'

function NotesIntroCardTag({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.tag}>{children}</div>
    </>
  )
}

export default NotesIntroCardTag

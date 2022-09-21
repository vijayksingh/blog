import { ReactNode } from 'react'
import styles from '../NotesList/NotesIntroCard.module.scss'

function NotesIntroCardSummary({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.summary}>{children}</div>
    </>
  )
}

export default NotesIntroCardSummary

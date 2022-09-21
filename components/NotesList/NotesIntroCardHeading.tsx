import { ReactNode } from 'react'
import styles from '../NotesList/NotesIntroCard.module.scss'

function NotesIntroCardHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={styles.heading}>{children}</div>
    </>
  )
}

export default NotesIntroCardHeading

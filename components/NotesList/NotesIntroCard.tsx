import { ReactNode } from 'react';
import styles from '../NotesList/NotesIntroCard.module.scss';

function NotesIntroCard({ children }: { children : ReactNode}) {
  return (
    <>
    <div className={styles.notesCardContainer}>
        { children }
    </div>
    </>
  );
}

export default NotesIntroCard;
import styles from '../NotesList/NotesIntroCard.module.scss';

function NotesIntroCard({ children }) {
  return (
    <>
    <div className={styles.notesCardContainer}>
        { children }
    </div>
    </>
  );
}

export default NotesIntroCard;
import styles from '../NotesList/NotesIntroCard.module.scss';

function NotesIntroCardHeading({ children }) {
    return ( <>
    <div className={styles.heading}>
        {children}
    </div>
    </> );
}

export default NotesIntroCardHeading;
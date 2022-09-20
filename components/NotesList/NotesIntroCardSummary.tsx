import styles from '../NotesList/NotesIntroCard.module.scss';

function NotesIntroCardSummary({ children }) {
    return ( <>
        <div className={styles.summary}>
            { children }
        </div>
    </> );
}

export default NotesIntroCardSummary;
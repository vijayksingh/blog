import styles from '../NotesList/NotesIntroCard.module.scss';

function NotesIntroCardTag({ children }) {
    return ( <>
        <div className={styles.tag}>
            { children }
        </div>
    </> );
}

export default NotesIntroCardTag;
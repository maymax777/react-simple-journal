import Container from '../../../components/main/Journal/Container';
import styles from './style.module.scss';

function JournalContainer({ children }) {
  return (
    <div className={styles.container} id="board">
      <Container>{children}</Container>
    </div>
  );
}

export default JournalContainer;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../../components/main/Journal/Footer';
import Text from '../../../components/main/Journal/Text';
import Button from '../../../components/common/Button';
import styles from './style.module.scss';
import actions from '../../../redux/journal/actions';
import { getCurrentDateTime } from '../../../utils';

function JournalFooter({ content }) {
  const [saved, setSaved] = React.useState(false);
  const dispatch = useDispatch();

  const { emotion, selectedDate } = useSelector((state) => state.Journal);

  const saveJournalData = () => {
    dispatch({
      type: actions.UPDATE_STORAGE,
      payload: {
        emotion,
        selectedDate,
        content,
        lastSavedTime: getCurrentDateTime(),
      },
    });
    setSaved(true);
  };

  /**
   * Reset save button
   */
  React.useEffect(() => {
    setSaved(false);
  }, [content, emotion, selectedDate]);

  return (
    <Footer>
      <Text className={styles.date}>{selectedDate}</Text>
      {!saved ? (
        emotion > 0 ? (
          <Button onClick={saveJournalData}>Save</Button>
        ) : (
          []
        )
      ) : (
        <Text>Saved on {getCurrentDateTime()}</Text>
      )}
    </Footer>
  );
}

export default JournalFooter;

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/main/Journal/Header';
import Text from '../../../components/main/Journal/Text';
import Badge from '../../../components/common/Badge';
import BadgeGroup from '../../../components/common/BadgeGroup';
import journalActions from '../../../redux/journal/actions';
import styles from './style.module.scss';
import {
  BOARD_TITLE,
  LABEL_AWFUL,
  LABEL_AMAZING,
} from '../../../utils/constants';

function JournalHeader() {
  const dispatch = useDispatch();
  const currentStatus = useSelector((state) => state.Journal.emotion);

  const handleStatus = useCallback(
    (status) =>
      dispatch({ type: journalActions.SET_STATE, payload: { status } }),
    [dispatch],
  );

  const renderStatusBadge = (statusNumber) => (
    <Badge
      className={styles.glowEffect}
      key={statusNumber}
      selected={statusNumber === currentStatus}
      status={statusNumber}
      onClick={() => handleStatus(statusNumber)}
    >
      <p>{statusNumber}</p>
    </Badge>
  );

  return (
    <Header>
      <h2>{BOARD_TITLE}</h2>
      <BadgeGroup>
        <Text className={styles.prefix}>{LABEL_AWFUL}</Text>
        {[1, 2, 3, 4, 5].map((statusNumber) => renderStatusBadge(statusNumber))}
        <Text className={styles.suffix}>{LABEL_AMAZING}</Text>
      </BadgeGroup>
    </Header>
  );
}

export default JournalHeader;

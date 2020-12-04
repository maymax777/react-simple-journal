import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/main/Card/Container';
import ListView from '../../components/common/ListView';
import CardItem from './CardItem';
import { FixedSizeList as List, areEqual } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import styles from './style.module.scss';
import useStoreManager from './useStoreManager';
import actions from '../../redux/journal/actions';

function CardList() {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const { date, data } = useStoreManager();
  const { selectedDate, lastSavedTime, cardId } = useSelector(
    (state) => state.Journal,
  );

  useEffect(() => {
    console.log({ cardId });
    if (containerRef.current)
      containerRef.current.scrollToItem(cardId - 2, 'start');
  }, [cardId]);

  useEffect(() => {
    const handleWheel = (evt) => {
      const count = evt.deltaY > 0 ? 1 : -1;
      console.log(count);
      if (cardId + count > 0)
        dispatch({
          type: actions.UPDATE_CARD_ID,
          payload: { cardId: cardId + count },
        });
    };
    document.addEventListener('wheel', handleWheel);
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [cardId, dispatch]);

  const renderCardItem = React.memo(({ index }) => {
    const oneDate = date[index];
    const cardData = data[oneDate] || {};
    return (
      <CardItem
        selected={oneDate === selectedDate}
        index={index}
        key={oneDate}
        date={oneDate}
        content={cardData.content}
        status={cardData.emotion}
        lastSavedTime={lastSavedTime}
      />
    );
  }, areEqual);

  return (
    <Container>
      <ListView>
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              ref={containerRef}
              className={styles.cardList}
              width={width}
              height={180}
              // itemSize={width / date.length}
              itemSize={date.length - 50}
              itemCount={date.length}
              layout="horizontal"
              direction="rtl"
            >
              {renderCardItem}
            </List>
          )}
        </AutoSizer>
      </ListView>
    </Container>
  );
}

export default CardList;

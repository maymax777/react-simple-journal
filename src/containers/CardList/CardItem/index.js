import React from 'react';
import { useDispatch } from 'react-redux';
import CardContainer from '../../../components/main/Card/CardContainer';
import CardDate from '../../../components/main/Card/CardDate';
import CardText from '../../../components/main/Card/CardText';
import Badge from '../../../components/common/Badge';
import actions from '../../../redux/journal/actions';
import { formatDate } from '../../../utils';

function CardItem({ index, status, date, content, selected }) {
  const dispatch = useDispatch();

  const animateBoard = () => {
    document
      .getElementById('board')
      .animate(
        [
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-30px)' },
          { transform: 'translateY(10px)' },
          { transform: 'translateY(0px)' },
        ],
        {
          duration: 300,
        },
      );
  };

  const handleCardClick = () => {
    if (!selected) {
      animateBoard();
      dispatch({
        type: actions.UPDATE_DATA,
        payload: {
          selectedDate: date,
          content: content,
          emotion: status || 0,
          cardId: index,
        },
      });
    }
  };

  return (
    <CardContainer selected={selected} onClick={handleCardClick}>
      <Badge small selected={index === status} status={status}>
        {status ? status : ''}
      </Badge>
      <CardDate>{formatDate(date)}</CardDate>
      <CardText>
        <p>{content}</p>
      </CardText>
    </CardContainer>
  );
}

export default CardItem;

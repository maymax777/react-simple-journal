import React from 'react';
import BoardContainer from './JournalContainer';
import BoardHeader from './JournalHeader';
import BoardFooter from './JournalFooter';
import BoardContent from './JournalContent';

function Board() {
  const [content, setContent] = React.useState('');

  return (
    <BoardContainer>
      <BoardHeader />
      <BoardContent setContent={setContent} />
      <BoardFooter content={content} />
    </BoardContainer>
  );
}

export default Board;

import React, { useState, useEffect } from 'react';
import Content from '../../../components/main/Journal/Content';
import { useSelector } from 'react-redux';
import { JOURNAL_PLACEHOLDER } from '../../../utils/constants';

function JournalContent({ setContent }) {
  const [text, setText] = useState('');
  const content = useSelector((state) => state.Journal.content);
  const handleContentUpdate = (e) => {
    setText(e.target.value);
    setContent(e.target.value);
  };

  useEffect(() => {
    setText(content || '');
  }, [content]);

  return (
    <Content>
      <textarea
        value={text}
        placeholder={JOURNAL_PLACEHOLDER}
        onChange={handleContentUpdate}
      />
    </Content>
  );
}

export default JournalContent;

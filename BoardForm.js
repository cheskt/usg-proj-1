import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function BoardForm({ addBoard, editBoard }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editBoard) {
      setTitle(editBoard.title);
      setContent(editBoard.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editBoard]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard({ title, content }); // 수정된 내용 전송
    setTitle(''); // 폼 초기화
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>제목 </label>
        <TextField id="outlined-basic" label="제목을 입력하세요" variant="outlined"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>내용 </label>
        <TextField id="outlined-basic" label="내용을 입력하세요" variant="outlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <br></br>
      <Button variant="contained" type="submit">{editBoard ? '수정' : '글 작성'}</Button>
    </form>
  );
}

export default BoardForm;
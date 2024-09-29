import React from 'react';
import Button from '@mui/material/Button';

function BoardItem({ board, onEdit, onDelete }) {
  return (
    <li>
      <h3>{board.title}</h3>
      <p>{board.content}</p>
      <Button variant="outlined" onClick={() => onEdit(board)}>수정</Button>
      <Button variant="outlined" onClick={() => onDelete(board.id)}>삭제</Button>
    </li>
  );
}

export default BoardItem;
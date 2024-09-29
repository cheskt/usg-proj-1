import React from 'react';
import BoardItem from './BoardItem';

function BoardList({ boards, onEdit, onDelete }) {
  return (
    <div>
      <h2> 게시글 목록</h2>
      <ul>
        {boards.map((board) => (
          <BoardItem 
            key={board.id} 
            board={board} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
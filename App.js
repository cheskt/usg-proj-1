import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import BoardForm from './components/BoardForm';


function App() {
  const [boards, setBoards] = useState([]);
  const [editBoard, setEditBoard] = useState(null);

  // API에서 게시글 목록 가져오기
  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/boards'); // Spring Boot API와 통신
      setBoards(response.data);
    } catch (error) {
      console.error('Error fetching boards:', error);
    }
  };

  const addBoard = async (board) => {
    try {
      if (editBoard) {
        // 수정 시
        await axios.put(`http://localhost:8080/api/boards/${editBoard.id}`, board);
        setEditBoard(null); // 수정 모드 종료
      } else {
        // 새 글 추가
        await axios.post('http://localhost:8080/api/boards', board);
      }
      fetchBoards(); // 새 글이 추가되면 목록을 다시 불러옴
    } catch (error) {
      console.error('Error adding board:', error);
    }
  };

  const handleEdit = (board) => {
    setEditBoard(board);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/boards/${id}`);
      fetchBoards(); // 삭제 후 목록을 다시 불러옴
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  };

  return (
    <div className="App">
      <h1>나의 게시판</h1>
      <BoardForm addBoard={addBoard} editBoard={editBoard} />
      <BoardList boards={boards} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
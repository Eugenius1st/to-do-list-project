import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Post from './Pages/Post';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="to-do-list-project">
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/post" element={<Post />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

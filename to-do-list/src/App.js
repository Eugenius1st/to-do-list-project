import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Post from "./Pages/Post";
import Edit from "./Pages/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

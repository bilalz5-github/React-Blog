// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AddPost from './Pages/AddPost';
import { PostProvider } from './Context/PostContext';

function App() {
  return (
    <PostProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost />} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
  
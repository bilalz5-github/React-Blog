// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import AddPost from './Pages/AddPost';
import { PostProvider } from './Context/PostContext';

function App() {
  return (
    <PostProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-post" component={AddPost} />
          </Switch>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;

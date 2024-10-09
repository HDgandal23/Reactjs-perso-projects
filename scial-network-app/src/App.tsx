import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/creatpost/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={ <Main /> }/>
          <Route path='/login' element={ <Login /> } />
          <Route path='/create' element={ <CreatePost /> } />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;

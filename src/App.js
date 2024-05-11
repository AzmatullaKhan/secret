import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Opening} from './pages/Opening'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Opening />}></Route>
      </Routes>
    </div>
  );
}

export default App;
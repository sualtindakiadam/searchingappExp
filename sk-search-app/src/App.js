import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import Main from './pages/Main/Main';
import AddLink from './pages/AddLink/AddLink';

function App() {



  return (
    <Routes >
      <Route path='/' element={<Main />} />
      <Route path='/addLink' element={<AddLink />} />

    </Routes>

  );
}

export default App;
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import Main from './pages/Main/Main';
import AddNewRecord from './pages/AddNewRecord/AddNewRecord';

function App() {



  return (
    <Routes >
      <Route path='/' element={<Main />} />
      <Route path='/AddNewRecord' element={<AddNewRecord />} />

    </Routes>

  );
}

export default App;
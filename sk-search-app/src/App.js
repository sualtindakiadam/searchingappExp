import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import Main from './pages/Main/Main';
import AddNewRecord from './pages/AddNewRecord/AddNewRecord';
import RecordList from './pages/RecordList/RecordList'

function App() {



  return (
    <Routes >
      <Route path='/RecordList' element={<Main />} />
      <Route path='/AddNewRecord' element={<AddNewRecord />} />
      <Route path='/' element={<RecordList />} />
    </Routes>

  );
}

export default App;
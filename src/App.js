import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import User from './Component/User';

function App() {
  return (
    <>
    <div className='link'>
      <Link to='/'>Home</Link>
      <Link to='/Student'>Student</Link>
      <Link to='/Contact'>Contact Us</Link>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/User/:id' element={<User/>}/>
      </Routes>
    </>
  );
}

export default App;

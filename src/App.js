import { useState } from 'react';
import './App.css';
import Students from './Components/Students';
import { Data } from './Data/Data';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';
import NoPage from './Components/NoPage';


function App() {
  const [students,setStudents] = useState(Data)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/users' element={ <Students
       students={students}
       setStudents={setStudents}
       />}/>
       <Route path='/create-user' element={<AddStudents
         students={students}
         setStudents={setStudents}
       />}/>
       <Route path='/edit-profile/:id' element={<EditStudents
       students={students}
       setStudents={setStudents}/>
       }/>
       

       <Route path='*' element={<NoPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

import Base from '../base/Base'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Students({students,setStudents}) {
const navigat = useNavigate()    
    const deletestudent =(studentId)=>{
        const removedStudents = students.filter(student=>student.id !== studentId);
        setStudents(removedStudents)
    }


  return (
    <Base
    title={"Student Info"}
    description={"All Students info Will be Display"}>
     <div className='stud-collections'>   
    {students.map((stud, idx)=>
     <div elevation={5} className='stud-card' key={idx}>
        <h4>{stud.name}</h4>
        <p>Batch :{stud.batch}</p>
        <p>Gender :{stud.gender}</p>
        <p>Branch :{stud.branch}</p>
        <div className='vard-btn-group'>
            <Button color="secondary"onClick={()=>navigat(`/edit-profile/${stud.id}`)}>Edit</Button>
            <Button color="error"onClick={()=>deletestudent(stud.id)}>Delete</Button>
        </div>  
        <div className='vard-btn-group'>
        <Button color="success"onClick={()=>navigat(`/edit-user/${stud.id}`)}>Login</Button>
        </div>  
     </div>
    )}
    </div>
    </Base>
  )
}

export default Students
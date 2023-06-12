import React, { useEffect, useState } from 'react'
import Base from '../base/Base'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material';

function EditStudents({students,setStudents}) {
    const {id} = useParams();
    const navigat = useNavigate()
    const[idx,setIdx] = useState("")
    const[name,setName] = useState("")
    const[batch,setBatch] = useState("")
    const[gender,setGender] = useState("")
    const[branch,setBranch] = useState("")

    

    useEffect(()=>{

    const studentData = students.find(stud => stud.id === id);
    if(studentData) {
    setIdx(studentData.id)
    setName(studentData.name)
    setBatch(studentData.batch)
    setGender(studentData.gender)
    setBranch(studentData.branch)
    
    }
    }, [id,students])

     const updateStudent = ()=>{
     const studIndex = students.findIndex((stud)=>stud.id === id);

     const updatedStudent ={
        id,
        name,
        batch,
        gender,
        branch
     }
     students[studIndex] = updatedStudent
     setStudents([...students])
     navigat("/users")
     }

  return (
    <Base
    title={"Edit the stduent Data"}
    description={"Editing the data list of detail"}
    >
    <div className='form-group'>
    <h4>Edit Students Details</h4>
    <TextField  id="outlined-basic" variant="outlined" fullWidth sx={{ m: 1 }} label="Enter Id of Students"
      type='number'
      value={idx}
      onChange={(e)=>setIdx(e.target.value)}
      />
      <TextField id="outlined-basic" variant="outlined" fullWidth sx={{ m: 1 }} label='Enter Name of Students'
      type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" variant="outlined" fullWidth sx={{ m: 1 }} label="Enter Batch of Students"
      type='text'
      value={batch}
      onChange={(e)=>setBatch(e.target.value)}
      />
      <TextField id="outlined-basic" variant="outlined" fullWidth sx={{ m: 1 }} label="Enter Gender of Students"
      type='text'
      value={gender}
      onChange={(e)=>setGender(e.target.value)}
      />
      <TextField id="outlined-basic" variant="outlined" fullWidth sx={{ m: 1 }} label="Enter Branch of Students"
      type='text'
      value={branch}
      onChange={(e)=>setBranch(e.target.value)}
      />
      <div>
      <Button onClick={updateStudent} variant='contained'>Update-Student</Button>
    </div> 
</div>
</Base>
  )
}

export default EditStudents
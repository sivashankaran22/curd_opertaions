import React, { useState } from 'react'
import Base from '../base/Base'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
function AddStudents({students,setStudents}) {
       const navigat = useNavigate()
       const[id,setId] = useState("")
       const[name,setName] = useState("")
       const[batch,setBatch] = useState("")
       const[gender,setGender] = useState("")
       const[branch,setBranch] = useState("")


       const handleAddStudent =()=>{
        const newStudent = {
            id,
            name,
            batch,
            gender,
            branch
        }
        
        setStudents([...students,newStudent])
        // setId("")
        // setBatch("")
        // setName("")
        // setGender("")
        // setBranch("")
          navigat ("/users")
       }

  return (
    <Base
    title={"Add New Student"}
    description={"Fill the form to add new student details"}
    >
    <div className='form-group'>
        <h4>Add Students Details</h4>

      <TextField  id="outlined-basic" variant="outlined" fullWidth sx={{ m: 1 }} label="Enter Id of Students"
      type='number'
      value={id}
      onChange={(e)=>setId(e.target.value)}
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
      <Button onClick={handleAddStudent} variant='contained'>Add-Student</Button>
      </div>
    </div>
    </Base>
  )
}

export default AddStudents
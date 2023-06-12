import { AppBar,  IconButton, Toolbar } from '@mui/material'
// import React, { Children } from 'react'
import { useNavigate } from 'react-router-dom'

function Base({title,description,children}) {

    const navigat = useNavigate()
  return (
    <div className='main-cantainer'>
      <header>
      <AppBar position="static">
           <Toolbar className='app-bar' >

              <IconButton edge="end" color="inherit" aria-label="Dashboard" sx={{ mr: 3 }} onClick={()=>navigat("/")}>Dashboard
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="Studend List" sx={{ mr: 2 }} onClick={()=>navigat("/users")}>Studend List
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="Add Student" sx={{ mr: 2 }} onClick={()=>navigat("/create-user")}>Add Student
              </IconButton>
            
            </Toolbar>
      </AppBar>
      </header>
      <main>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className='contents'>{children}</div>
      </main>
    </div>
  )
}

export default Base
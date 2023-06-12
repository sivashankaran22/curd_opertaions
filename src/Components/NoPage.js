import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoPage() {
    const navigat = useNavigate()
  return (
    <div>    
      <p>Can you Please check the URL</p>
    <div>
    <Button variant="outlined" onClick={()=>navigat("/")}>Go To Home</Button>
    </div>
    </div>

  )
}

export default NoPage
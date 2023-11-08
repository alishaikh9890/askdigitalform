import React from 'react'
import success from "../assets/success.gif"
import { Outlet, Link } from "react-router-dom";
import { Button } from '@mui/material';

const Success = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
    <div style={{ marginTop:"auto", marginRight:"auto", marginLeft:"auto", marginBottom:"auto", height:"fit-conent", width:"50%"}}>
        <img style={{width:"100%"}} src={success} alt='' />
    </div>
<Link style={{textDecoration:"none"}}
to={"/"}>
<Button variant='contained' color='success' style={{margin:"auto", display:"flex", justifyContent:"center", textDecoration:"none", fontWeight:"600", fontSize:"24px"}} >Back To Form</Button>
</Link>
    </div>
  )
}

export default Success
import React from 'react'
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./form.css"
import { useState } from 'react';

const YourForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState('')

    const first=(e)=>{
        
        setEmail(e.target.value)
        console.log(email)
}
const second=(e)=>{
        
    setPassword(e.target.value)
    console.log( "e",password)
}
const third=(e)=>{
        
e.preventDefault()
  setSubmit(e.target.value)
  const p={email,password}
    console.log(p)
}

    return (
        <div>
           <div className="form">
           
           <Form style={{marginTop:"5%"}} onSubmit={third}>
<Form.Group controlId="formBasicEmail">
 <Form.Label>Email address</Form.Label>
 <Form.Control type="text" placeholder="Enter email"  onChange={first}/> 
 <Form.Text className="text-muted">
   We'll never share your email with anyone else.
 </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
 <Form.Label>Password</Form.Label>
 <Form.Control type="password" placeholder="Password" onChange={second} />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
 <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit"  >
 Submit
</Button>
</Form>
     </div> 
   
    )
}

export default YourForm

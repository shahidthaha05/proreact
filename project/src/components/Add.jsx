import { useState } from "react"
import axios from "axios";

function Add(){
    const [rollNo,setRollNo] = useState('')
    const [name,setName] = useState('')
    const [course,setCourse] = useState('')
    const [email,setEmail] = useState('')
const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/student/',{rollNo,name,course,email}).then((res)=>{
        setRollNo('')
        setName('')
        setCourse('')
        setEmail('')
    }).catch(error=>console.log(error.message))
}

    return(
        <form onSubmit={handleSubmit} >
            <input type="number" name="rollNo" id="rollNo" value={rollNo} onChange={(e)=>setRollNo(e.target.value)}/>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" name="course" id="course" value={course} onChange={(e)=>setCourse(e.target.value)} />
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="submit" value='Add' className="btn btn-primary" />
        </form>
    )
}

export default Add
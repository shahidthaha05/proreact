import { useEffect, useState } from "react"
import axios from 'axios'
import Add from "./Add"
function List(){
    const [data,setData] = useState([])
    const [editing,setEditing] = useState(false)
    const [editData,setEditData] = useState(null)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/student/').then((res)=>{
            console.log(res.data)
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])

    const EditingFun = (task)=>{
        setEditing(true)
        setEditData(task)
    }

    const updateFun=(id,task)=>{
        setEditing(false)
        axios.put(`http://127.0.0.1:8000/api/student/${id}/`,task).then((res)=>{
            setData(data.map((tasks)=>(id===tasks ? res.data : tasks)))
        }).catch(error=>console.log(error.messsage))
    }

    const deleteFun=(id)=>{
        setEditing(false)
        axios.delete(`http://127.0.0.1:8000/api/student/${id}/`).then((res)=>{
            setData(data.filter((tasks)=>(tasks.id!==id)))
        }).catch(error=>console.log(error.messsage))
    }

    return(
        <div className="container">
            <h1>STUDENT MANAGEMENT</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ROLL NO</th>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.rollNo}</td>
                            <td>{value.name}</td>
                            <td>{value.course}</td>
                            <td>{value.email}</td>
                            <td><button className="btn btn-outline-info" onClick={()=>{EditingFun(value)}}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>{deleteFun(value.id)}}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            {editing ? <EditForm curTask={editData} updateFunction={updateFun}/> : <Add/>}
        </div>
    )
}

const EditForm = ({curTask,updateFunction})=>{
    const [task,setTask] = useState(curTask)
    const handleChange = (e)=>{
        const {name,value}=e.target
        setTask({...task,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        updateFunction(task.id,task)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="number" name="rollNo" id="rollNo" value={task.rollNo} onChange={handleChange}/>
            <input type="text" name="name" id="name" value={task.name} onChange={handleChange}/>
            <input type="text" name="course" id="course" value={task.course} onChange={handleChange}/>
            <input type="email" name="email" id="email" value={task.email} onChange={handleChange}/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
    )
}

export default List
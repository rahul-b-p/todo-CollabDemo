import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

function AddTodo() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        due: '',
        timestamp: ''
    })

    const taskSetUp=()=>{
        const now = new Date().toLocaleString()
        setTask({
            ...task,
            timestamp: now
          })
        addData()
    }

    const addData =()=>{
        console.log(task);
        
    }
    return (
        <>
            <div className='w-100'>
                <h3 className='fw-bold'>What's new to do..?</h3>
                <form className='mt-5 shadow p-4 transparent rounded'>
                    <Row className='mb-4'>
                        <Col md={6} className='pe-2'>
                            <label> Task Name</label>
                            <input value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} className='form-control' type="text" placeholder='task name' />
                        </Col>
                        <Col md={6} className='ps-2'>
                            <label>Due Date</label>
                            <input value={task.due} onChange={(e) => setTask({ ...task, due: e.target.value })} type="date" className='form-control' placeholder='due date' />
                        </Col>
                    </Row>
    
                    <label>Description</label>
                    <textarea onChange={(e) => setTask({ ...task, description: e.target.value })} className='form-control' type="text" placeholder='description' />
                    <button onClick={taskSetUp} type='button' className='btn btn-dark mt-4'>Add New</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo
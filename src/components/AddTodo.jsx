import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

function AddTodo() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        due: '',
        timestamp: ''
    })

    const timeSetUp = () => {
        const now = new Date().toLocaleString()
        setTask({
            ...task,
            timestamp: now
        })
        task.timestamp=="" && alert('content saved')
    }

    const addData = () => {
        const { title, description, due } = task
        if (!title || !description || !due) {
            alert('Please fill the feilds completely')
        }
        else {
            timeSetUp()
            console.log(task);
        }
    }
    return (
        <>
            <div className='w-100 mt-5 pt-5'>
                <h3 className='fw-bold mt-5'>What's new to do..?</h3>
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
                    <button onClick={addData} type='button' className='btn btn-dark mt-4'>{task.timestamp == "" ? 'Save' : 'Add New'}</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo
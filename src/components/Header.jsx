import { faCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

function Header() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }
    return (
        <>
            <nav className="navbar shadow navbar-expand-lg bg-dark w-100  fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <h1 className=" fw-bolder text-secondary" ><FontAwesomeIcon icon={faCheck} className='me-3' />My To Do</h1>
                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faCircleInfo} size='2xl' className='text-primary' onClick={handleOpen} />
                </div>
            </nav>
            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bold'>How It Works</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol>
                        <li><b>Add a Task:</b> Type your Task name, description and due date in the input box and click the "Add New" button. Your task will instantly appear in the list below.</li>
                        <li><b>Delete a Task: </b>Once you’ve completed a task, simply click the "Delete" button next to it to remove it from your list.</li>
                        <li><b>Edit a Task:</b> Made a mistake or need to update a task? Easily edit tasks as needed.</li>
                    </ol>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Header
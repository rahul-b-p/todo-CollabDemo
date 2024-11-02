import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

function TodoCard() {
    return (
        <>
            <Card className='w-100 bg-light'>
                <Card.Body>
                    <Card.Title className='text-primary fw-bold'>Card Title</Card.Title>
                    <Card.Text className='text-dark'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <span>TimeStamp: </span>
                    <br />
                    <span>Due: </span>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <Button variant='outline-danger'><FontAwesomeIcon icon={faTrashCan}/></Button>
                    <Button variant='outline-primary'>< FontAwesomeIcon icon={faEdit}/></Button>
                </Card.Footer>
            </Card>
        </>
    )
}

export default TodoCard
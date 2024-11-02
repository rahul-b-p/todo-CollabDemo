import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TodoCard from './TodoCard'

function TodoList() {
  return (
    <>
      <Container fluid className='border-top w-100 border-4 mt-5 '>
        <h2 className='fw-bold mt-4'>My ToDo List</h2>
        <Row className='mt-4'>
          <Col lg={3} md={4} sm={6} xs={12} className='p-4'  >
            <TodoCard/>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className='p-4' >
            <TodoCard/>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className='p-4' >
            <TodoCard/>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className='p-4' >
            <TodoCard/>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className='p-4' >
            <TodoCard/>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className='p-4' >
            <TodoCard/>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default TodoList
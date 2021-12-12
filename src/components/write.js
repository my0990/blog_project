import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

const Container = styled.div`
    width: 100%;
    border: 2px solid #eee;
    border-radius: 10px;
    max-width: 600px;
    box-sizing: border-box;
    padding: 30px;
    text-align: start;
    margin: 10px auto;
`





function Write(){
    
    return(
        <Container>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control type="email" placeholder="제목을 입력하세요"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="내용을 입력하세요"/>
            </Form.Group>
            </Form>
            <div style={{textAlign: 'center'}}>
                <Button variant="outline-secondary">입력</Button>
            </div>
        </Container>
    )
}

export default Write;
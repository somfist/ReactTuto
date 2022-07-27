import React from 'react';
import styled from "styled-components";
import List from "../components/list/List"
import NoneTodo from '../components/todo/NoneTodo'

const TodoList = (props) => {
    let working = props.todoList.filter(todo => !todo.isDone)
    let done = props.todoList.filter(todo => todo.isDone)
    return (
        <Container>
            <div>
                <Label>Working..</Label>
                {working == '' ? <NoneTodo/> : 
                    <List todoList={props.todoList} doneList={working} setTodoList={props.setTodoList}/> }
            </div>
            <div>
                <Label>Done..!</Label>
                <List todoList={props.todoList} doneList={done} setTodoList={props.setTodoList}/>
            </div>
        </Container>
    );
};

const Container = styled.div`
    padding: 20px;
    & > div {
        margin-bottom: 20px;
    }
`;

const Label = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`
export default TodoList;
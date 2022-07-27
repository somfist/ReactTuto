import React from 'react';
import styled from 'styled-components';
import Todo from '../todo/Todo'

const List = (props) => {
    return (
        <Container>
            {props.doneList.map(todo => {
                return <Todo key={todo.unique} todo={todo} todoList={props.todoList} setTodoList={props.setTodoList}/> 
            })}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
`;

export default List;
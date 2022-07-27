import React from 'react';
import styled from 'styled-components';
import Form from '../form/Form';

const Header = (props) => {
    return (
        <Container>
            <div>
                <div>My TodoList</div>
                <div>주특기 1주차</div>
            </div>
            <Form todoList={props.todoList} setTodoList={props.setTodoList}/>
        </Container>
    );
};

const Container = styled.header`
    & > div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    };

    font-weight: bold;

`;

export default Header;
import React, { useState } from 'react';
import styled from "styled-components";
import TodoList from "../../pages/TodoList";
import Header from "../header/Header";

const Layout = () => {
    const [todoList, setTodoList] = useState([]);
    return (
        <Container>
            <Header todoList={todoList} setTodoList={setTodoList}/>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
        </Container>
    );
};

const Container = styled.div`
    min-width: 800px;
    max-width: 1200px;
    height: 100vh;

    margin: 0 auto;
`;

export default Layout
import React, { useRef } from 'react';
import styled from "styled-components";
import 'bulma/css/bulma.css' // yarn add bulma
import {Button} from 'react-bulma-components'   // yarn add react-bulma-components

const Form = (props) =>{
    const title = useRef(null)
    const contents = useRef(null)

    const btnAddHandler = (event) => {
        if(title.current.value === ''){
            alert('제목을 입력해주세요!')
            return
        }

        const newTodo = {
        'unique' : props.todoList == '' ? 0 : props.todoList.at(-1).unique + 1,
        'title' : title.current.value,
        'contents' : contents.current.value,
        'isDone' : false
        }
        props.setTodoList([...props.todoList, newTodo])
        title.current.value = ''
        contents.current.value = ''
    }
    return (
        <Container>
            <div>
                <div><Input name="제목" ref={title}/></div>
                <div><Input name="내용" ref={contents}/></div>
            </div>
            <div>
                <Button color="primary" onClick={btnAddHandler}>추가하기</Button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    & > div {
        width: 50%;
        display: flex;
        font-size: 13px;
    }
    & > div:nth-child(2) {justify-content: end;}
    padding : 20px;
    background-color: #dadada;
    border-radius: 25px;
`;

const Input = styled.input.attrs((props) => ({
    type: "text",    // 나중에 다르게 사용할 용도로 how to use만 => 고정 props
    placeholder: props.name,
    // readOnly: props.name === "내용" ? "readOnly" : ''
}))`
    outline: none;
    border : none;
    border-radius: 25px;
    padding: 10px;
    margin-left: 20px;
    
    min-width: 250px;
`;

export default Form
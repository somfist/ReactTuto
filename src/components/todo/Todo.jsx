import React from 'react';
import 'bulma/css/bulma.css'
import {Card, Button} from 'react-bulma-components'

const Todo = (props) => {
    const headerCSS = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        minHeight: 50
        }
    const contentsCSS = {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 14
    }
    const footerCss = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px'
    }
    const btnDeleteHandler = (event) => {
        let deleteUnique = event.target.dataset.unique
        let deleteList = props.todoList.filter(todo => todo.unique != deleteUnique)
        props.setTodoList(deleteList)
    }
    const btnDoneHandler = (event) => {
        let changeUnique = event.target.dataset.unique
        let changeList = props.todoList.filter(todo => {
            if(todo.unique == changeUnique) todo.isDone = !todo.isDone
            return todo
        })
        props.setTodoList(changeList)
    }
    return (
        <Card style={{width: 350, borderRadius: '25px', overflow: 'hidden', margin: '0 0 20px 20px'}}>
            <Card.Header style={headerCSS}>{props.todo.title}</Card.Header>
            <Card.Content style={contentsCSS}>{props.todo.contents}</Card.Content>
            <Card.Footer style={footerCss}>
                <Button data-unique={props.todo.unique} color="danger" onClick={btnDeleteHandler}>삭제하기</Button>
                <Button data-unique={props.todo.unique} color={props.todo.isDone ? 'warning' : 'success'} onClick={btnDoneHandler}>{props.todo.isDone ? '취소' : '완료'}</Button>
            </Card.Footer>
        </Card>
    );
};

export default Todo;
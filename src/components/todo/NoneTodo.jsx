import React from 'react';
import 'bulma/css/bulma.css'
import {Card, Button} from 'react-bulma-components'

const NoneTodo = () => {
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
    return (
        <Card style={{width: 350, borderRadius: '25px', overflow: 'hidden', marginLeft: '20px'}}>
            <Card.Header style={headerCSS}>할 일 목록이 없어요!</Card.Header>
            <Card.Content style={contentsCSS}>한가하신가 보네요..</Card.Content>
            <Card.Footer style={footerCss}>
                <Button color="danger">할일을 좀</Button>
                <Button color="success">만들어보세요</Button>
            </Card.Footer>
        </Card>
    );
};

export default NoneTodo;
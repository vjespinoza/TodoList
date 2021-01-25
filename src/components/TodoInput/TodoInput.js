import React from "react";
import { Card, Typography, Input, Grid } from "@material-ui/core";
//Imported styles
import useStyles from "./style";
//Imported components
import AddTodoButton from "../AddTodoButton/AddTodoButton";

const TodoInput = ({todo, setTodo, inputText, setInputText}) => {
    const classes = useStyles();

    const inputTextHandler = (e) => {
        
        setInputText(e.target.value)
    }

    // let warningText = ''
    //  console.log(warningText)

    const submitTodoHandler = () => {
        if (inputText.length > 0) {
            setTodo([...todo, {
                id: todo.length,
                text: inputText,
            }]);
            setInputText('');
        }
        // else {
                    
        //    warningText = 'Your todo is empty!'
        //    console.log(warningText)
        
        //}
    };

    const onKeyUpHandler = (e) => {
        e.preventDefault()
        if (e.keyCode === 13) {
            submitTodoHandler()
        }
    }

    return (
        <div>
            <Card className={classes.todoCard}>
            <Typography className={classes.inputTitle} variant="h3">
                Awesome Todo List!
            </Typography>
            <Grid className={classes.gridContainer}>
                <Input
                    value={inputText}
                    onChange={inputTextHandler}
                    onKeyUp={onKeyUpHandler}
                    className={classes.todoInput}
                    placeholder="Add A New Todo!"
                ></Input>
                <AddTodoButton submitTodoHandler={submitTodoHandler}/>
            </Grid>
            </Card>
            {/* <Card>{warningText}</Card> */}
        </div>
            
    );
}


export default TodoInput;

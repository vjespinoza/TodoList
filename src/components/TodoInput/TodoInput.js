import React, { useState } from "react";
import { Card, Typography, Input, Grid } from "@material-ui/core";
//Imported styles
import useStyles from "./style";
//Imported components
import AddTodoButton from "../AddTodoButton/AddTodoButton";
import EmptyInputAlert from "../../utilities/Dialog/EmptyInputAlert";


const TodoInput = ({todo, setTodo, inputText, setInputText}) => {
    const [open, setOpen] = useState(false);
    
    const classes = useStyles();

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = () => {
        if (inputText.length > 0) {
            setTodo([...todo, {
                id: todo.length,
                text: inputText,
            }]);
            setInputText('');
        } else {
            handleOpen()
        }
    };

    const onKeyUpHandler = (e) => {
        e.preventDefault()
        if (e.keyCode === 13) {
            submitTodoHandler()
        } 
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
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
                <EmptyInputAlert
                    open={open}
                    setOpen={setOpen}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    />
            </Grid>
        </Card>
    );
}


export default TodoInput;

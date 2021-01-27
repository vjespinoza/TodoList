import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import useStyles from "./style";
import RemoveTodoButton from "../RemoveTodoButton/RemoveTodoButton";

const TodoItem = ({ todoText, todoItem, setTodo, todo }) => {
    const classes = useStyles();

    const removeTodoHandler = (e) => {
        setTodo(todo.filter((x) => x.id !== todoItem.id));
    };

    return (
        <Card className={classes.todoItemCard}>
            <Grid className={classes.todoItemWraper}>
                <Typography>{todoText}</Typography>
                <RemoveTodoButton
                    todoItem={todoItem}
                    removeTodoHandler={removeTodoHandler}
                />
            </Grid>
        </Card>
    );
};

export default TodoItem;

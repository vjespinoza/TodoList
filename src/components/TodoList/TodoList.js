import React from "react";
import useStyles from "./style";
import { Card } from "@material-ui/core";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const classes = useStyles();

    return (
        <Card className={classes.todoListContainer}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </Card>
    );
};

export default TodoList;

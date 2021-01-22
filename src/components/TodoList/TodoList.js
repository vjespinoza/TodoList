import React from "react";
import { Card } from "@material-ui/core";
//Imported styles
import useStyles from "./style";
//Imported components
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo }) => {
    const classes = useStyles();

    if (todo.length !== 0) {
        return (
            <Card className={classes.todoListContainer}>
                <ul className={classes.todoListItem}>
                    {todo.map((todoItem) => (
                        <TodoItem key={todoItem.id} todoItem={todoItem.text} />
                    ))}
                </ul>
            </Card>
        );
    } else {
        return <div></div>;
    }
};

export default TodoList;

import React from "react";
import { Card } from "@material-ui/core";
//Imported styles
import useStyles from "./style";
//Imported components
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo, setTodo }) => {
    const classes = useStyles();

    if (todo.length !== 0) {
        return (
            <Card className={classes.todoListContainer}>
                <ul className={classes.todoListItem}>
                    {todo.map((todoItem) => (
                        <TodoItem
                            todo={todo}
                            setTodo={setTodo}
                            key={todoItem.id}
                            todoText={todoItem.text}
                            todoItem={todoItem}
                        />
                    ))}
                </ul>
            </Card>
        );
    } else {
        return <div></div>;
    }
};

export default TodoList;

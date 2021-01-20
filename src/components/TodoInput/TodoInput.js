import React from "react";
import { Card, Typography, Input, Grid } from "@material-ui/core";
import useStyles from "./style";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

function TodoInput() {
    const classes = useStyles();
    return (
        <Card className={classes.todoCard}>
            <Typography className={classes.inputTitle} variant="h3">
                Awesome Todo List!
            </Typography>
            <Grid className={classes.gridContainer}>
                <Input
                    className={classes.todoInput}
                    placeholder="Add A New Todo!"
                ></Input>
                <AddTodoButton />
            </Grid>
        </Card>
    );
}

export default TodoInput;

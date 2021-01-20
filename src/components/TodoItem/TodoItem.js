import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import useStyles from "./style";
import RemoveTodoButton from "../RemoveTodoButton/RemoveTodoButton";

const TodoItem = () => {
    const classes = useStyles();

    return (
        <Card className={classes.todoItemCard}>
            <Grid className={classes.todoItemWraper}>
                <Typography>This a task This a task This a task</Typography>
                <RemoveTodoButton />
            </Grid>
        </Card>
    );
};

export default TodoItem;

import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import useStyles from "./style";
import RemoveTodoButton from "../RemoveTodoButton/RemoveTodoButton";

const TodoItem = ({ todoItem }) => {
    const classes = useStyles();

    return (
        <Card className={classes.todoItemCard}>
            <Grid className={classes.todoItemWraper}>
                <Typography>{todoItem}</Typography>
                <RemoveTodoButton />
            </Grid>
        </Card>
    );
};

export default TodoItem;

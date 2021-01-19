import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import useStyles from "./style";

function TodoInput() {
    const classes = useStyles();
    return (
        <Card className={classes.colorCard}>
            <Typography className={classes.colorText} variant="h1">
                Hello, I'm a component!
            </Typography>
            <Button className={classes.colorButton}>The Button</Button>
        </Card>
    );
}

export default TodoInput;

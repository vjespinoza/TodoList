import React from "react";
import useStyle from "./style";
import { Button } from "@material-ui/core";

const RemoveTodoButton = ({ removeTodoHandler }) => {
    const classes = useStyle();

    return (
        <Button onClick={removeTodoHandler} className={classes.removeButton}>
            <span className="material-icons">delete</span>
        </Button>
    );
};

export default RemoveTodoButton;

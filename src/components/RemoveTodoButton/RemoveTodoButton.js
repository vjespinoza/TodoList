import React from "react";
import useStyle from "./style";
import { Button } from "@material-ui/core";

const RemoveTodoButton = () => {
    const classes = useStyle();

    return <Button className={classes.removeButton}>X</Button>;
};

export default RemoveTodoButton;

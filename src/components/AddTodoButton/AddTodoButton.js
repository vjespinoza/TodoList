import { Button } from "@material-ui/core";
import useStyles from "./style";

const AddTodoButton = () => {
    const classes = useStyles();

    return <Button className={classes.colorButton}>+</Button>;
};

export default AddTodoButton;

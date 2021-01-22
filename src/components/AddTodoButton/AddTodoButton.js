import { Button } from "@material-ui/core";
import useStyles from "./style";

const AddTodoButton = ({ submitTodoHandler }) => {
    const classes = useStyles();

    return (
        <Button onClick={submitTodoHandler} className={classes.colorButton}>
            +
        </Button>
    );
};

export default AddTodoButton;

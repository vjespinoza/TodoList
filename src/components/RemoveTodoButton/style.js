import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    removeButton: {
        background: "linear-gradient(45deg, #d90429 20%, #d90429 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        width: 30,
        minWidth: 30,
        height: 30,
        fontSize: 15,
    },
});

export default useStyles;

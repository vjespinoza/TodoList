import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    todoItemCard: {
        display: "flex",
        width: "90%",
        padding: 15,
        marginBottom: 20,
        "&:last-child": {
            marginBottom: 0,
        },
    },
    todoItemWraper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
});

export default useStyles;

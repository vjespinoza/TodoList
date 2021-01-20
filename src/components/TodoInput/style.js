import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    todoCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70%",
        ["@media (min-width: 780px)"]: {
            width: 450,
        },
        padding: 40,
        margin: "50px auto 0px auto",
    },

    gridContainer: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    },

    todoInput: {
        paddin: 20,
        width: "70%",
        ["@media (min-width: 780px)"]: {
            width: "80%",
        },
    },

    inputTitle: {
        fontSize: 35,
        textTransform: "capitalize",
        marginBottom: 20,
    },
});

export default useStyles;

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    todoListContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 15,
        width: "85vw",
        ["@media (min-width: 780px)"]: {
            width: 450,
            padding: 40,
        },
        height: "fit-content",
        margin: "50px auto 0px auto",
        background: "rgba(255,255,255,0.1)",
    },
    todoListItem: {
        display: "block",
        width: "100%",
    },
});

export default useStyles;

import "./App.css";
import { Grid } from "@material-ui/core";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <Grid className="app">
            <Grid>
                <TodoInput />
            </Grid>
            <Grid>
                <TodoList />
            </Grid>
        </Grid>
    );
}

export default App;

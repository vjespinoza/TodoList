import React, { useState } from "react";
import { Grid } from "@material-ui/core";
//Imported styles
import "./App.css";
//Imported components
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [todo, setTodo] = useState([]);

    return (
        <div>
            <Grid className="app">
                <Grid>
                    <TodoInput
                        todo={todo}
                        setTodo={setTodo}
                        inputText={inputText}
                        setInputText={setInputText}
                    />
                </Grid>
                <Grid>
                    <TodoList todo={todo} setTodo={setTodo} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

import React, {Component} from "react";
import HelloWorld from "./HelloWorld";
import { store } from "./store";
import ButtonGroup from "./ButtonGroup";

//Using Redux
// const initialState = {tech: "Reacting"};
// const store = createStore(reducer, initialState);

class App extends Component {

    //Managing state yourself
   // state = {
     //   technical: "Boo"
    //};

    render() {

        //Redux
        //return <HelloWorld tech={store.getState().tech}/>;

        //Managing it yourself
        return[
            <HelloWorld key={1} tech={store.getState().tech} />,
            <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
        ]
    }
}

export default App;

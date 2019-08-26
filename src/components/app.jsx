/** @jsx h */
import { h, Component, render } from "preact";

class App extends Component {
    render() {
        return (
            <div id="root">
                <h1>Hello world</h1>
            </div>
        );
    }
}

render(<App />, document.body);
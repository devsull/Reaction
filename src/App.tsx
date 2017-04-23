import * as React from "react";

import { FormInput } from "./components/FormInput";

export class App extends React.Component<any, any> {
    state = { inputValue: "" };

    inputValueUpdate = (value: string) => {
        console.log("invoked APP update with", value)
        this.setState({inputValue: value})
    }

    render() {
        const app = <div>
            <FormInput setValueFunction={this.inputValueUpdate} />
            <div>
                Value: {this.state.inputValue}
            </div>
        </div>;

        return app;
    }
}
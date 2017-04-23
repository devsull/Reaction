import * as React from "react";

import { FormInput } from "./components/FormInput";

export interface AppState {        
    emailValue: string,
    testValue: string
}

export class App extends React.Component<any, AppState> {
    state = { 
        emailValue: "",
        testValue: ""
    };

    render() {
        const app = <div className="row">
            <div className="col">
                <FormInput label="Email"
                    setValueFunction={(value: string) => this.setState({emailValue: value})}
                    type="email" />
                    
                <div>
                    Email Value: {this.state.emailValue}
                </div>
            </div>
            
            <div className="col">
                <FormInput label="Testing"
                    setValueFunction={(value: string) => this.setState({testValue: value})} />
                    
                <div>
                    Test Value: {this.state.testValue}
                </div>
            </div>

        </div>;

        return app;
    }
}
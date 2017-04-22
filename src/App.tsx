import * as React from "react";

import { Hello } from "./components/Hello";

export class App extends React.Component<undefined, undefined> {
    render() {
        const app = 
            <div className="container">
                <div className="row">
                    <Hello compiler="TypeScript" framework="React" />
                </div>
            </div>;

        return app;
    }
}
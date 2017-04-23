import * as React from "react";
import * as ReactDom from "react-dom";

export interface FormInputProps { setValueFunction: Function; }

export interface FormInputState { }

export class FormInput extends React.Component<FormInputProps, FormInputState> {
    private inputElement: HTMLInputElement;

    // constructor(props: any) {
    //     super(props);
    // };

    handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setValueFunction(event.target.value);
    }

    render() {
        return <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        // value={this.state.value}
                        onChange={this.handleOnChange}
                        />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else, or will we?</small>
                </div>;
    }
}
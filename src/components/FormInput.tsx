import * as React from "react";
import * as ReactDom from "react-dom";
import * as _ from "lodash";

export interface FormInputProps {
    label: string;
    setValueFunction: Function;
    type?: string;
    helpText?: string;
    placeholder?: string;
}

export interface FormInputState {
    id: string;
 }

export class FormInput extends React.Component<FormInputProps, FormInputState> {
    private id: string;
    private helpId: string;

    constructor(props: FormInputProps) {
        super(props);

        this.id = _.uniqueId("form-input-");
        this.helpId = `${this.id}-help`
    };

    handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setValueFunction(event.target.value);
    }

    render() {
        return <div className="form-group">
                    <label htmlFor={this.id}>
                        {this.props.label}
                    </label>
                    <input className="form-control"
                        id={this.id}
                        type={this.props.type === undefined ? "text" : this.props.type} 
                        placeholder={this.props.placeholder}
                        onChange={this.handleOnChange} 
                        aria-describedby={this.helpId} />
                    <small className="form-text text-muted" id={this.helpId}>
                        {this.props.helpText}
                    </small>
                </div>;
    }
}
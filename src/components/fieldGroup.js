import React from "react";
import {
    FormLabel
} from '@contentful/forma-36-react-components';

export class FieldGroup extends React.Component {

    render() {
        const {margin, children} = this.props

        return <div style={{marginTop: margin, marginBottom: margin}}>

            { this.renderLabel() }

            { children }
        </div>
    }

    renderLabel() {
        const {name, required, requiredText, label} = this.props

        if (!label) {
            return
        }

        return <FormLabel
            htmlFor={name}
            required={required}
            requiredText={requiredText}
            testId={name}
        >
            {label}
        </FormLabel>
    }
}

FieldGroup.defaultProps = {
    margin: '15px',
    requiredText: 'required'
}


export default FieldGroup
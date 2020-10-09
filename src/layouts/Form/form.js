import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap'
import ContactValidation from '../../validations/ContactValidation'

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning }
}) => (
    <Row>
        <Col md="12">
            <Label htmlFor="{input}" className="col-form-label">
                {label}
            </Label>
        </Col>
        <Col md="12">
            <Input
                {...input}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readOnly}
            ></Input>
            {touched && 
                // eslint-disable-next-line no-mixed-operators
                ((error && <p style={{ color: "red" }}>{error}</p> ||
                    (warning && <p style={{ color: "brown" }}>{warning}</p>)))}
        </Col>
    </Row>
)

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                        <FormGroup>
                            <Field 
                                type="text"
                                name="id"
                                component={renderField}
                                label="Id :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field 
                                type="text"
                                name="firstName"
                                component={renderField}
                                label="First Name :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field 
                                type="text"
                                name="lastName"
                                component={renderField}
                                label="Last Name :"
                            />
                        </FormGroup>
                    </Col>

                    <Col md={6}>
                        <FormGroup>
                            <Field 
                                type="text"
                                name="age"
                                component={renderField}
                                label="Age :"
                            />
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md={12}>
                        <FormGroup>
                            <Button
                                className="update"
                                type="submit"
                                disabled={this.props.submitting}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        )
    }
}

Form = reduxForm({
    form: "formCreateContact",
    validate: ContactValidation,
    enableReinitialize: true
})(Form)
export default connect()(Form)
